/* eslint-disable no-tabs */
/* eslint-disable react/jsx-indent */
import React from 'react';
import Section from '../components/Code/Section';
import TextHeading from '../components/Code/TextHeading';
import TextSubHeading from '../components/Code/TextSubHeading';
import TextAndCode from '../components/Code/TextAndCode';
import Text from '../components/Code/Text';
import Code from '../components/Code/Code';

export default function CommercialPaperTutorial() {
  return (
    <>
      <Section>
        <TextHeading>
          Commercial Paper Tutorial
        </TextHeading>
        <Text>
          by the end of this document, you should be able to:
        </Text>
        <ol>
          <li>
            <Text>
              Write Smart Contracts for ParallelChain from scratch using the
              ParallelCore Smart Contract Go SDK.
            </Text>
          </li>
          <li>
            <Text>
              Write Applications for ParallelChain from scratch using the ParallelCore
              Client Go SDK.
            </Text>
          </li>
          <li>
            <Text>
              Have a rough sense of the differences between ParallelChain and Hyperledger
              Fabric that are relevant to developers.
            </Text>
          </li>
        </ol>
      </Section>
      <Section>
        <TextSubHeading>
          Commercial Paper Smart Contract - High-level anatomy
        </TextSubHeading>
        <Text>
          As you already know if you have read ‘Writing Smart Contracts,’ a smart contract
          to the ParallelCore Smart Contract SDK is simply any Go language struct that
          implements an Initialize and a Handle method, each with a well-defined signature.
        </Text>
        <Text>
          The couple main features to note, right out of the gate are:
        </Text>
        <ul>
          <li>
            <Text>
              <code>Initialize</code> is called once every time a smart contract is deployed.
              This is useful, for instance, if (in your business needs) a deployment
              of a smart contract is an event that has effects on the world state
              or triggers the invocation of another smart contract. However, in this
              scenario (and in most real-life scenarios, we have found) this functionality
              is unnecessary. Hyperledger Fabric’s counterpart to <code>Initialize</code>
              is <code>Instantiate</code>
            </Text>
          </li>
        </ul>
        <TextAndCode numTabs={2}>
          <ul>
            <li>
              <Text>
                <code>Handle</code> is called every time a smart contract is invoked. The business
                logic of your smart contract should enter the control flow through here. You could
                technically write a ParallelChain smart contract that is nothing but an empty
                <code>Initialize</code> and a massive Handle, but good coding practices will compel
                you to write something like what we have above, where Handle serves mostly as a
                wrapper around a <code>switch…case</code>: construct that multiplexes between
                multiple kinds of actions; in our case: issue, buy, and redeem.
              </Text>
            </li>
          </ul>
          <Code language="go">
{`// File: main.go
// Smart contract instance
type Contract struct {}

// Initialize does nothing
func (c Contract) Initialize(tr engine.Transaction, in []byte) ([]byte, error) {
  return nil, nil
}

type IssueArgs struct { /* Arguments for issue */  }
func issue(ptcx paper.TransactionContext, ia IssueArgs) error {
  // do things related to issuing a commercial paper.
}

type BuyArgs struct { /* Arguments for buy */ }
func buy(ptcx paper.TransactionContext, ba BuyArgs) error {
  // do things related to buying a commercial paper.
}

type RedeemArgs struct { /* Arguments for redeem */ }
func doRedeem(ptcx paper.TransactionContext, ra RedeemArgs) error {
  // do things related to redeeming a commercial paper
}

func (c Contract) Handle(tr engine.Transaction, in []byte) ([]byte, error) {
  args := strings.Split(string(in), " ")
  action := args[0]

  switch action {
  case "Issue":
    faceValue, err := strconv.Atoi(args[5])
    err = issue(paper.TransactionContext{Transaction: tr}, IssueArgs{args[1], args[2], args[3], args[4], faceValue})
    return []byte(fmt.Sprintf("Paper successfully issued")), nil

  case "Buy":
    price, err := strconv.Atoi(args[5])
    err = buy(paper.TransactionContext{Transaction: tr}, BuyArgs{args[1], args[2], args[3], args[4], price, args[6]})
    return []byte(fmt.Sprintf("Paper successfully bought")), nil

  case "Redeem":
    err := doRedeem(paper.TransactionContext{Transaction: tr}, RedeemArgs{args[1], args[2], args[3], args[4]})
    return []byte(fmt.Sprintf("Paper successfully redeemed")), nil

  default:
    return nil, fmt.Errorf("action should be one of ['List', 'Issue', 'Buy', 'Redeem']. Received: %s", action)
  }
}

// SmartContract is the exported SmartContract
var SmartContract Contract`}
          </Code>
          <Code language="go">
{`// File: papercontract.go
// Smart contract instance
type Contract struct {
  contractapi.Contract
}

// Instantiate does nothing
func (c *Contract) Instantiate() {
  fmt.Println("Instantiated")
}

func (c *Contract) Issue(ctx TransactionContextInterface, issuer string, paperNumber string,
  issueDateTime string, maturityDateTime string, faceValue int) (*CommercialPaper, error) {
	// do things related to issuing a commercial paper
}

func (c *Contract) Buy(ctx TransactionContextInterface, issuer string, paperNumber string,
  currentOwner string, newOwner string, price int, purchaseDateTime string) (*CommercialPaper, error) {
	// do things related to buying a commercial paper
}

func (c *Contract) Redeem(ctx TransactionContextInterface, issuer string, paperNumber string,
  redeemingOwner string, redeenDateTime string) (*CommercialPaper, error) {
	// do things related to redeeming a commercial paper
}

// File main.go
func main() {

  contract := new(commercialpaper.Contract)
  contract.TransactionContextHandler = new(commercialpaper.TransactionContext)
  contract.Name = "org.papernet.commercialpaper"
  contract.Info.Version = "0.0.1"

  chaincode, err := contractapi.NewChaincode(contract)

  chaincode.Info.Title = "CommercialPaperChaincode"
  chaincode.Info.Version = "0.0.1"

  err = chaincode.Start()
}`}
          </Code>
        </TextAndCode>
      </Section>
    </>
  );
}
