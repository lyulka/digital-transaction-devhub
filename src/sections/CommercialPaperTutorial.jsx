/* eslint-disable react/jsx-indent */
/* eslint-disable max-len */
/* eslint-disable no-tabs */
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
          What is Interoperability?
        </TextSubHeading>
        <Text>
          If you have read “Writing Smart Contracts”, you’ll know that one of our goals
          with ParallelChain is to maximize flexibility. This philosophy extends to the
          design of our SDKs. For developers, this means simpler smart contracts, with
          less boilerplate, and less ‘magic functions.’ For businesses, this means
          interoperability with popular private blockchain systems like Hyperledger
          Fabric.
        </Text>
        <Text>
          Interoperability means rapid and painless migration of smart contracts,
          applications, and even whole networks from Hyperledger Fabric to ParallelChain,
          without any loss of functionality. You or your company could have a whole host
          of reasons to migrate to ParallelChain: higher throughput, provable immutability,
          compliance with GDPR data protection laws, the list goes on.
        </Text>
        <Text>
          In this series of tutorials, we will write ParallelChain smart contracts and
          applications of increasing complexity. To demonstrate interoperability with
          Hyperledger Fabric, the scenarios that we will develop for will be pulled
          straight out of https://hyperledger-fabric.readthedocs.io/en/release-2.2/tutorials.html.
          You will find that migrating from Fabric into ParallelChain is a very simple affair.
        </Text>
      </Section>
      <Section>
        <TextSubHeading>
          Commercial Paper – The Scenario
        </TextSubHeading>
        <Text>
          Commercial paper is a type of security issued by large corporations to obtain funds
          to meet short-term needs. The buyer of a commercial paper can redeem it on the
          paper&apos;s maturity date. On redeem, the issuer of the paper pays the buyer the
          face amount specified on the note.
        </Text>
        <Text>
          In our scenario, MagnetoCorp (in the person of staff member Isabella) issues commercial
          papers through PaperNet, a private blockchain network.
        </Text>
        <Text>
          Another organization in PaperNet, DigiBank (in the person of staff member Balaji),
          seeks to buy the commercial paper.
        </Text>
        <Text>
          On the maturity date, DigiBank wants to redeem the commercial paper (return ownership
          of the paper to MagnetoCorp) in exchange for its monetary value (+added interest).
        </Text>
        <Text>
          Our first order of business, then is to write a smart contract that implements issue,
          buy, and redeem actions.
        </Text>
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
        <Text>
          <ul>
            <li>
              <code>Initialize</code> is called once every time a smart contract is deployed.
              This is useful, for instance, if (in your business needs) a deployment
              of a smart contract is an event that has effects on the world state
              or triggers the invocation of another smart contract. However, in this
              scenario (and in most real-life scenarios, we have found) this functionality
              is unnecessary. Hyperledger Fabric’s counterpart to <code>Initialize</code>
              is <code>Instantiate</code>
            </li>
          </ul>
        </Text>
        <TextAndCode numTabs={2}>
          <Text>
            <ul>
              <li>
                <code>Handle</code> is called every time a smart contract is invoked. The business
                logic of your smart contract should enter the control flow through here. You could
                technically write a ParallelChain smart contract that is nothing but an empty
                <code> Initialize</code> and a massive <code>Handle</code>, but good coding
                practices
                will compel you to write something like what we have above, where Handle serves
                mostly as a
                wrapper around a <code>switch…case</code>: construct that multiplexes between
                multiple kinds of actions; in our case: issue, buy, and redeem.
              </li>
            </ul>
          </Text>
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
        <Text>
          Now, onto the main differences between the ParallelChain and Fabric code samples:
        </Text>
        <Text>
          <ol>
            <li>
              Fabric smart contracts have a <code>main</code> method, ParallelChain
              smart contracts do not. To execute your contract, the ParallelCore Engine
              simply looks for the exported <code>SmartContract</code> variable’s
              (last line of ParallelChain sample <code>Handle</code> method and
              calls it.
            </li>
            <li>
              Fabric smart contracts do not have a <code>Handle</code> method.  Behind the scenes, Fabric extracts the non-keyword names of methods attached to <code>type Contract</code> and registers them as invokable actions. In ParallelChain, this is done explicitly in <code>Handle</code>.
            </li>
            <li>
              Fabric smart contract ‘action functions’ are methods of <code>type Contract</code>, ParallelChain action functions are plain, well, functions.
            </li>
            <li>
              Fabric smart contract action functions can return any type they like, ParallelChain’s <code>Handle</code> returns a generic slice of bytes.
            </li>
          </ol>
        </Text>
        <Text>
          The two code samples have a few other differences—we’ve only listed ones that are mandatory—others, like how we are passing arguments to <code>issue, buy,</code> and <code>redeem</code> inside a <code>struct</code>, are simply a subjective matter of code style.
        </Text>
      </Section>
      <Section>
        <TextSubHeading>
          The `issue` action
        </TextSubHeading>
        <TextAndCode numTabs={2}>
        <Text>
          Let&apos;s move on and implement <code>issue</code>: the action Isabella in MagnetoCorp will
          use to create new Commercial Papers and put them in circulation.
        </Text>
        <Code language="go">
{`// File: main.go
type IssueArgs struct { /* Arguments for issue */  }

func issue(ptcx paper.TransactionContext, ia IssueArgs) error {
  newPaper := paper.Paper{
    PaperNumber:      ia.PaperNumber,
    Issuer:           ia.Issuer,
    IssueDateTime:    ia.IssueDateTime,
    FaceValue:        ia.FaceValue,
    MaturityDateTime: ia.MaturityDateTime,
    Owner:            ia.Issuer,
    State:            paper.ISSUED,
  }
  return ptcx.AddPaper(newPaper)
}

// File: papercontext.go
// AddPaper adds paper to PCoreDB in serialized form with
// key: paper.FullKey().
// It returns an error if paper already exists.
func (ptcx *TransactionContext) AddPaper(paper Paper) error {
  existing, err := ptcx.GetPaper(paper.FullKey())
  if err != nil {
    return err
  }
  if !existing.Empty() {
    return fmt.Errorf("paper with FullKey: %s already exists", paper.FullKey())
  }

  tr := ptcx.Transaction
  pBytes, _ := paper.Serialize()
  tr.Set(paper.FullKey(), pBytes)

  return nil
}`}
        </Code>
        <Code>
{`// File: main.go
// Issue creates a new commercial paper and stores it in the world state
func (c *Contract) Issue(ctx TransactionContextInterface, issuer string, paperNumber string, issueDateTime string, maturityDateTime string, faceValue int) (*CommercialPaper, error) {
  paper := CommercialPaper{PaperNumber: paperNumber, Issuer: issuer, IssueDateTime: issueDateTime, FaceValue: faceValue, MaturityDateTime: maturityDateTime, Owner: issuer}
  paper.SetIssued()

  err := ctx.GetPaperList().AddPaper(&paper)

  if err != nil {
    return nil, err
  }

  return &paper, nil
}

// File: paperlist.go
func (cpl *list) AddPaper(paper *CommercialPaper) error {
  return cpl.stateList.AddState(paper)
}

// File: statelist.go
// AddState puts state into world state
func (sl *StateList) AddState(state StateInterface) error {
  key, _ := sl.Ctx.GetStub().CreateCompositeKey(sl.Name, state.GetSplitKey())
  data, err := state.Serialize()

  if err != nil {
    return err
  }

  return sl.Ctx.GetStub().PutState(key, data)
}`}
        </Code>
        </TextAndCode>
        <Text>
          The key lines are:
        </Text>
        <TextAndCode>
          <Text>
            <ul>
              <li>
            We start by quering the key-value store to check if a paper with the same issuer and paperNumber (in the form of <code>FullKey()</code>, which we define in <code>paper.go</code>, already exists). If so, issue and by extension <code>Handle</code> returns with an error.
              </li>
            </ul>
          </Text>
          <Code>
existing, err := ptcx.GetPaper(paper.FullKey())
          </Code>
        </TextAndCode>
        <TextAndCode>
          <Text>
            <ul>
              <li>
            We ‘flatten’ the <code>paper struct</code> into a slice of bytes	. This will become the ‘value’ in the key-value pair that represents our commercial paper in the PCoreDB key-value store. You can implement <code>Serialize</code> in any way you want. Typically, you would serialize your business entities into JSON-encoded strings for simplicity, but anything from YAML to Google’s Protocol Buffers works just as well.
              </li>
            </ul>
          </Text>
          <Code>
existing, err := ptcx.GetPaper(paper.FullKey())
          </Code>
        </TextAndCode>
        <TextAndCode>
          <Text>
            <ul>
              <li>
                We have defined a FullKey() method on paper that returns a string of the form <code>`CP&lt;issuer&gt;&lt;paperNumber&gt;`</code>
              </li>
            </ul>
          </Text>
          <Code>
tr.Set(paper.FullKey(), pBytes)
          </Code>
        </TextAndCode>
        <Text>
          Now that we have both key and value on hand, we can write the pair into the world state using <code>Transaction.Set()</code>. Transactions in ParallelChain are committed into the world state and the blockchain immediately, before a client’s smart contract invocation returns. In much slower, ‘public’ blockchains like Bitcoin and Ethereum, this makes interactive, ‘real-time’ applications impossible. ParallelChain handles these workloads perfectly.
        </Text>
        <TextAndCode>
          <Text>
            <code>Transaction</code> is a struct provided to you by the Smart Contract SDK. If you’ve worked with Hyperledger Fabric before, you can see how <code>Transaction</code> provides an interface similar to that exposed by Fabric&apos;s<code>ChaincodeStub</code>, just much simpler. We’ll only be working with <code>Transaction</code>’s <code>Get</code>, <code>Set</code>, and <code>GetByRange</code> methods in this tutorial.
          </Text>
          <Code language="go">
{`type Transaction interface {
  Get(key string) FutureByteSlice
  Set(key string, value []byte)
  GetByRange(startKey string, endKey string, opts RangeOptions) RangeIterator
  Find(startKey string, endKey string, searchCriteria string, opts RangeOptions) Rang      eIterator
  Delete(key string)
  SetTag(name string, value []byte)
  EmitEvent(name string, payload []byte)
  StoreTxIdTo(key string)
  Session() Session
  Invoke(smartcontractSpec string, args []byte) ([]byte, error)
}`}
          </Code>
        </TextAndCode>
      </Section>
      <Section>
        <TextSubHeading>
          The `buy` and `redeem` actions
        </TextSubHeading>
        <TextAndCode numTabs={2}>
          <Text>
            Now that you are familiar with the code for ‘issue’, we should be able to skim through both ‘buy’ and ‘redeem.’ Here is the code for buy, which Balaji from DigiBank will use to buy MagnetoCorp&apos;s issued CP and transfer its ownership to Digibank&apos;s.
          </Text>
          <Code language="go">
{`func buy(ptcx paper.TransactionContext, ba BuyArgs) error {
  fullKey := paper.MakeFullKey(ba.Issuer, ba.PaperNumber)
  p, err := ptcx.GetPaper(fullKey)

  if err != nil {
    return err
  }

  if p.Empty() {
    return fmt.Errorf("paper with FullKey: %s does not exist", fullKey)
  }

  if p.Owner != ba.CurrentOwner {
    return fmt.Errorf("paper %s is not owned by %s", fullKey, ba.CurrentOwner)
  }

  if p.Redeemed() {
    return fmt.Errorf("paper %s is already redeemed", fullKey)
  }

  p.State = paper.TRADING // Change state to trading
  p.Owner = ba.NewOwner   // Change owner to new owner

  return ptcx.UpdatePaper(p)
}`}
          </Code>
          <Code language="go">
{`func (c *Contract) Redeem(ctx TransactionContextInterface, issuer string, paperNumber string, redeemingOwner string, redeenDateTime string) (*CommercialPaper, error) {
  paper, err := ctx.GetPaperList().GetPaper(issuer, paperNumber)

  if err != nil {
    return nil, err
  }

  if paper.Owner != redeemingOwner {
    return nil, fmt.Errorf("Paper %s:%s is not owned by %s", issuer, paperNumber, redeemingOwner)
  }

  if paper.IsRedeemed() {
    return nil, fmt.Errorf("Paper %s:%s is already redeemed", issuer, paperNumber)
  }

  paper.Owner = paper.Issuer
  paper.SetRedeemed()

  err = ctx.GetPaperList().UpdatePaper(paper)

  if err != nil {
    return nil, err
  }

  return paper, nil
}`}
          </Code>
        </TextAndCode>
        <TextAndCode numTabs={2}>
          <Text>
            And here is the code for redeem, which Balaji will use to return the CP he bought to MagnetoCorp for profit!
          </Text>
          <Code language="go">
{`// RedeemArgs contains the arguments that an application
// needs to provide were it to invoke the Redeem action.
type RedeemArgs struct {
  Issuer         string
  PaperNumber    string
  RedeemingOwner string
  RedeemDateTime string
}

func redeem(ptcx paper.TransactionContext, ra RedeemArgs) error {
  fullKey := paper.MakeFullKey(ra.Issuer, ra.PaperNumber)
  p, err := ptcx.GetPaper(fullKey)

  if err != nil {
    return err
  }

  if p.Empty() {
    return fmt.Errorf("paper with FullKey: %s does not exist", fullKey)
  }

  if p.Owner != ra.RedeemingOwner {
    return fmt.Errorf("paper %s is not owned by %s", fullKey, ra.RedeemingOwner)
  }

  if p.Redeemed() {
    return fmt.Errorf("you can only redeem paper %s once", fullKey)
  }

  p.Owner = p.Issuer // Return paper to issuer
  p.State = paper.REDEEMED

  return ptcx.UpdatePaper(p)
}`}
          </Code>
          <Code>
{`func (c *Contract) Redeem(ctx TransactionContextInterface, issuer string, paperNumber string, redeemingOwner string, redeenDateTime string) (*CommercialPaper, error) {
  paper, err := ctx.GetPaperList().GetPaper(issuer, paperNumber)

  if err != nil {
    return nil, err
  }

  if paper.Owner != redeemingOwner {
    return nil, fmt.Errorf("Paper %s:%s is not owned by %s", issuer, paperNumber, redeemingOwner)
  }

  if paper.IsRedeemed() {
    return nil, fmt.Errorf("Paper %s:%s is already redeemed", issuer, paperNumber)
  }

  paper.Owner = paper.Issuer
  paper.SetRedeemed()

  err = ctx.GetPaperList().UpdatePaper(paper)

  if err != nil {
    return nil, err
  }

  return paper, nil
}`}
          </Code>
        </TextAndCode>
      </Section>
      <Section>
        <TextSubHeading>
          Querying the database &mdash; the &apos;get&apos; action
        </TextSubHeading>
        <TextAndCode>
          <Text>
            Keen-eyed readers should have noticed that we’ve also included in <code>main.go</code> three extra actions beyond <code>issue</code>, <code>buy</code>, and <code>redeem</code>. We will investigate the other two in a bit, but for now it’d do well for us if we look into get, an action which requires us to <code>GetByRange</code>.
          </Text>
          <Code language="go">
{`// File: main.go
func list(ptcx paper.TransactionContext) ([]byte, error) {
  papers, err := ptcx.GetAllPapers()
  if err != nil {
    return nil, err
  }

  return []byte(fmt.Sprintf("%+v", papers)), nil
}

// File: papercontext.go
// GetAllPapers returns a slice of Papers corresponding to
// papers that exist in PCoreDB.
func (ptcx *TransactionContext) GetAllPapers() ([]Paper, error) {
  tr := ptcx.Transaction

  res := make([]Paper, 0)

  // Get all items with keys starting with "CP/, lexicographically ascending"
  iterator := tr.GetByRange("CP/", "CP/\xff", engine.RangeOptions{Limit: 0, Tail: false})
  for iterator.Advance() {
    _, paperJSON, err := iterator.Get()
    if err != nil {
      return nil, err
    }

    paper, err := FromJSON(paperJSON)
    if err != nil {
      return nil, err
    }

    res = append(res, paper)
  }

  return res, nil
}`}
          </Code>
        </TextAndCode>
        <Text>
          This method of <code>Transaction</code> takes in three arguments: a <code>start</code> key (inclusive), an <code>end</code> key (exclusive), and a struct that defines a few further query parameters.
        </Text>
        <Text>
          In the most precise terms, the ‘range’ in <code>GetByRange</code> is defined by lexicographic string ordering, not numerical or bitwise ordering. This is significant. If range meant bitwise range, then the key ‘AA’ will not be included in the results for <code>GetByRange(‘A’, ‘Z’, …)</code>. In lexicographic string ordering, it is. The start-end key pairs we specified in the call in the code sample will return us every item with keys starting with the prefix ‘CP/’.
        </Text>
        <Text>
          Scary bitwise string encoding talk: a single character in a PCoreDB key is encoded as a single byte (8-bits), that means that strictly speaking, you have 2^8 = 255 (256 – 1, \xff is reserved) unique characters available to you to construct a key, which includes all characters easily accessible on a typical full-size keyboard. This is more than sufficient for virtually all use cases.
        </Text>
        <Text>
          <code>Transaction.GetByRange()</code> returns an iterator <code>struct</code> which we can traverse through using the for construct above.
        </Text>
      </Section>
      <Section>
        <TextSubHeading>
          The `issue` application
        </TextSubHeading>
        <Text>
          If you have followed the tutorials closely so far, you should now be quite comfortable with the idea of smart contracts – executables ‘living’ in the blockchain network, executed by individual peer nodes. You should also have seen how we can invoke smart contracts through the ParallelCore CLI.
        </Text>
        <Text>
          But it would of course be quite counterintuitive for blockchain network users to have to open a command line interface on their high-powered Linux machine running ParallelCore every time they’d like to make a bid for an asset, or approve a transfer of goods in a supply chain.
        </Text>
        <Text>
          Ideally, we would like users’ interactions with the blockchain to be abstracted away as possible from scary things like ‘engines’ and ‘smart contracts’. We would like to develop ‘applications.’
        </Text>
        <TextAndCode numTabs={2}>
          <Text>
            This is where the ParallelCore Client Go SDK comes in (remember, we have been working with the smart contract SDK so far).
          </Text>
          <Code language="go">
{`package main

import (
  "fmt"
  "os"

  clientSDK "github.com/digital-transaction/parallelcore-client-sdk-go"
)

func main() {
  if len(os.Args) != 6 {
    badArgs := fmt.Errorf("Usage: ./issue <issuer> <paperNumber> <issueDateTime> <maturityDateTime> <faceValue>")
    fmt.Println(badArgs.Error())
    return
  }

  endpoint := "local.digital-transaction.net:5000 local.digital-transaction.net:5001"
  clientID := "demo"
  clientPassword := "demopass"
  certPath := "/var/lib/parallelcore/keys/chained.pem"

  client, err := clientSDK.OpenAny(endpoint, clientID, clientPassword, certPath)
  defer client.Close()
  if err != nil {
    fmt.Println(err)
    os.Exit(1)
  }

  issuer := os.Args[1]
  paperNumber := os.Args[2]
  issueDateTime := os.Args[3]
  maturityDateTime := os.Args[4]
  faceValue := os.Args[5]

  in := fmt.Sprintf("Issue %s %s %s %s %s", issuer, paperNumber, issueDateTime, maturityDateTime, faceValue)
  res, err := client.Invoke("CommercialPaper-v*", []byte(in))
  if err != nil {
    fmt.Println(err)
    os.Exit(1)
  }
  fmt.Println(string(res))
}`}
          </Code>
          <Code language="javascript">
{`const fs = require('fs');
const yaml = require('js-yaml');
const { Wallets, Gateway } = require('fabric-network');
const CommercialPaper = require('../contract/lib/paper.js');

async function main() {

    const wallet = await Wallets.newFileSystemWallet('../identity/user/isabella/wallet');
    const gateway = new Gateway();

    try {
        const userName = 'isabella';
        let connectionProfile = yaml.safeLoad(fs.readFileSync('../gateway/connection-org2.yaml', 'utf8'));
        let connectionOptions = {
            identity: userName,
            wallet: wallet,
            discovery: { enabled:true, asLocalhost: true }
        };

        await gateway.connect(connectionProfile, connectionOptions);

        const network = await gateway.getNetwork('mychannel');
        const contract = await network.getContract('papercontract');

        const issueResponse = await contract.submitTransaction('issue', 'MagnetoCorp', '00001', '2020-05-31', '2020-11-30', '5000000')

        console.log('Process issue transaction response.'+issueResponse);

        let paper = CommercialPaper.fromBuffer(issueResponse);

        console.log(\`$\{paper.issuer} commercial paper : $\{paper.paperNumber} successfully issued for value $\{paper.faceValue}\`);
        console.log('Transaction complete.');

    } catch (error) {

        console.log(\`Error processing transaction. $\{error}\`);
        console.log(error.stack);

    } finally {

        // Disconnect from the gateway
        console.log('Disconnect from Fabric gateway.');
        gateway.disconnect();

    }
}`}
          </Code>
        </TextAndCode>
        <Text>
          The single <code>clientSDK.Client</code> instantiated using <code>OpenAny</code> wraps around a connection to a single node in the ParallelChain network. All nodes in a ParallelChain network are logically identical, with access to the same world state, blockchain ledger, and able to execute any deployed smart contract, so it does not matter for our purposes which node we connect to.
        </Text>
        <Text>
          In our example, we tell <code>OpenAny</code> function to try and connect to either the node with the endpoint ‘local.digital-transaction.net:5000’, or the one with the endpoint ‘local.digital-transaction.net:5001.’ The function returns a <code>Client</code> with a connection to the the first endpoint in <code>endpointSpec</code> (a space-delimited list of endpoints) that isn’t too busy (load balancing considerations).
        </Text>
        <Text>
          We then <code>Invoke</code> the CommercialPaper smart contract, passing in arguments as a byte slice. The ‘-v*’ syntax appended to the end of first argument to <code>Invoke</code> specifies that we’d like to run the latest deployed version of the smart contract available. In most cases, this is the desired behavior, but ParallelChain can be configured to keep older versions of smart contracts executable too.
        </Text>
      </Section>
      <Section>
        <TextSubHeading>
          Key concept: ‘keyspaces’
        </TextSubHeading>
        <Text>
          Let’s say, 1-2 years down the line, another organization in our ParallelChain network creates their own series of ‘CP’ (Cute Pandas) smart contracts, and starts registering pandas into the shared PCoreDB key-value store with the same ‘CP/’ key prefixes we’ve used for ‘Commercial Paper.’ What happens to our key-value pairs?
        </Text>
        <Text>
          The short and easy answer is: nothing. Just like in Hyperledger Fabric, smart contracts in ParallelChain only ‘see’ the part of the database that is ‘keyspaced’ to them. This is a core idea in our programming model, and avails you greater flexibility in choosing keys: collisions will not happen.
        </Text>
        <Text>
          If your design calls for a set of smart contracts that frequently share data with each other, you should consider packaging them instead as separate actions within the same smart contract.
        </Text>
        <Text>
          If this makes your SC packages too large, then you might want to pull out all DB-related functions and put them into a single ‘utility’ smart contract. You can then use <code>Transaction.Invoke</code> to invoke actions in this utility smart contract, from other smart contracts.
        </Text>
        <Text>
          ParallelChain enforces development of light, performant smart contracts with clearly delineated roles. Smart contract invocations that take longer than 5-seconds automatically time out to prevent network bottleneck. If you find your smart contracts consistently hitting this 5-second limit, you should look into factoring out your business logic into multiple smart contracts.
        </Text>
      </Section>
      <Section>
        <TextSubHeading>
          Self-study
        </TextSubHeading>
        <Text>
          This brings us to the end of this tutorial. In order to fully cement your knowledge of ParallelChain smart contracts and applications, we implore you to look at source code for our implementations of the buyRequest, and Transfer actions, and the <code>Buy</code> and <code>Redeem</code> applications.
        </Text>
        <Text>
        Once you are ready, you can proceed to our next code walkthrough: ‘Secured Asset Transfer.’
        </Text>
      </Section>
    </>
  );
}
