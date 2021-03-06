/* eslint-disable react/jsx-indent */
import React from 'react';
import Section from '../components/Code/Section';
import TextHeading from '../components/Code/TextHeading';
import TextSubHeading from '../components/Code/TextSubHeading';
import TextAndCode from '../components/Code/TextAndCode';
import Text from '../components/Code/Text';
import Code from '../components/Code/Code';

export default function WritingSmartContracts() {
  return (
    <>
      <Section>
        <TextHeading>
          Writing Smart Contracts for ParallelChain
        </TextHeading>
        <Text>
          By the end of this document, you should be able to:
        </Text>
        <ol>
          <li>
            <Text>
              Describe what a Smart Contract is.
            </Text>
          </li>
          <li>
            <Text>
              Describe how a smart contract relates with the key-value
              store and the blockchain log of a ParallelChain™ network.
            </Text>
          </li>
          <li>
            <Text>
              Write smart contracts for ParallelChain™ in the Go programming
              language using the ParallelChain™ Smart Contract API.
            </Text>
          </li>
          <li>
            <Text>
              Compile and package the smart contracts you have developed,
              and deploy them to a running ParallelChain™ network.
            </Text>
          </li>
          <li>
            <Text>
              Invoke deployed Smart Contracts through: 1. Applications written
              with the ParallelChain™ Client API, and 2. Using the ParallelChain™
              Peer CLI.
            </Text>
          </li>
        </ol>
      </Section>
      <Section>
        <TextSubHeading>
          What is a Smart Contract?
        </TextSubHeading>
        <Text>
          In the eyes of a developer or a system administrator, a ‘Smart Contract’
          is simply an executable file, generated by compiling programmer-written
          code into a portable format, and installed in the peer nodes of a
          blockchain network.
        </Text>
        <Text>
          In ParallelChain™ networks, these executable files (technically, a shared
          library, without a main method) contain business logic that interacts with
          a key-value database (PCoreDB) and a blockchained log to facilitate real-life
          activities, including important business practices. These activities can
          include everything from the more pedestrian uses of blockchain, e.g.
          creation and transfer of ownership of digital assets, to more creative
          applications involving emerging technologies, e.g. secure logging of
          events captured by always-on IoT devices.
        </Text>
        <TextAndCode>
          <Text>
            A smart contract generates transactions, well-defined operations that change
            or query the state of PCoreDB (i.e. CRUD).As a key-value database, you can
            think of PCoreDB as a large, high-performance, persistent hashmap. A simple
            smart contract written with the ParallelChain™ Smart Contract API could,
            for example,when invokedin a peer node in the network:
            {' '}
            <code>tr.Set(‘hello’, ‘world’);</code>
            which does exactly what you expect it to.Another (or the same) smart contract
            executed after the transaction containing the Setoperation has been committed
            to PCoreDB can then
            {' '}
            <code>tr.Get(‘hello’)</code>
            {' '}
            ,which returns
            {' '}
            <code>‘world’.</code>
          </Text>
          <Code language="go">
            {`// Main.go

// Handle implements the business logic of a ParallelChain SmartContract.
// It is called on every invocation of the SC.

func (sc MySC) Handle(tr engine.Transaction, in []byte) ([]byte, error) {
  opts := strings.Split(string(in), " ")
  action := opts[0]

  switch action {
  case "sethello":
    return tr.Set('hello', 'world');
  case "gethello":
    return tr.Get('hello');
  default:
    helpmsg := "Supported actions: helloworld"
    return nil, fmt.Errorf("Unknown action: %s\\n%s", action, helpmsg)
  }
}`}
          </Code>
        </TextAndCode>
        <Text>
          The innovation of blockchain is that all transactions made in the network
          are persisted into an immutable(append-only) data structure—the blockchain—that
          is distributed and kept consistent in all peer nodes of the network. This way,
          history cannot be rewritten. Once a transaction, say the transfer of in-game
          currency, has occurred, parties in that transaction cannot deny that it happened.
          This property is immensely valuable in many business applications. ParallelChain™
          keeps PCoreDB, the blockchain log, and installed smart contractsconsistent in all
          peer nodes of the network.
        </Text>
        <Text>
          The ParallelChain™architecture is designed with flexibility as a core principle,
          and this philosophy extends to the ParallelChain™ Smart Contract API that you
          will be working with as a smart contract developer.For you, this flexibility
          avails two benefits: 1. It allows you to develop a vast class of smart
          contracts and applications, and 2. The generality of the API allows you
          to quickly transition into developing for ParallelChain™ from any other
          blockchain system, and to use any code styleor programmer-defined protocol
          that you personally deem more performant and/or more readable.
        </Text>
      </Section>
      <Section>
        <TextSubHeading>
          Setting up a Development Environment
        </TextSubHeading>
        <Text>
          For now, you need to ask Peter to set up a development environment in your
          local machine.
        </Text>
      </Section>
      <Section>
        <TextSubHeading>
          Editorial notes by the Author
        </TextSubHeading>
        <Text>
          The code snippets that I have included in this document are not perfect copies
          of what you’d get if you pull the ParallelChain SDKs from GitHub, or get them
          from Peter. I removed/added code comments, and presented a slightly different
          directory structure for clarity. This makes no difference to you if you are
          a programmer developing a smart contract—say ‘helloworld’—from scratch, but
          if you are looking to get Peter’s sample smartcontracts up and running
          quickly,you cannot just copy and paste my bash shell commands into your
          machine’s terminal.
        </Text>
      </Section>
      <Section>
        <TextSubHeading>
          A &apos;Hello World!&apos; Smart Contract
        </TextSubHeading>
        <Text>
          Writing a smart contract using the ParallelChain™ SmartContract API is so
          dead simple that we have decided to immediately jump into example code in
          this section. To the side is what you can think of as a ‘helloworld’ smart
          contract, written in Go.
        </Text>
        <TextAndCode>
          <Text>
            Notice first that ParallelChain Smart Contract API contracts do not have
            a main method defined. The ParallelChain Smart Contract engine is responsible
            for importing and executing this program within its control flow.
          </Text>
          <Code language="go">
            {`// Main.go

package main

import (
  "fmt"
  "strings"

  engine "parallelcore-smartcontract-sdk-go/smartcontract_engine"
)

// MySC is a programmer-defined struct type whose instances are ParallelChain
// smart contracts. It should implement the SmartContract interface.
type MySC struct {}

// Initialize is called when the smart contract is first *registered*
func (sc MySC) Initialize(tr engine.Transaction, in []byte) ([]byte, error) {
  return nil, nil
}

// Handle is called on every *invocation* of this smart contract.
func (sc MySC) Handle(tr engine.Transaction, in []byte) ([]byte, error) {
  opts := strings.Split(string(in), " ")
  action := opts[0]
  switch action {
  case "helloworld":
    return []byte("Hello World!"), nil
  default:
    helpmsg := "Supported actions: helloworld"
  return nil, fmt.Errorf("Unkown action: %s\n%s", action, helpmsg)
  }
}

// This exported variable should have the name "SmartContract"
var SmartContract MySC`}
          </Code>
        </TextAndCode>
        <TextAndCode>
          <Text>
            In the ParallelChain Smart Contract API for Go, a ParallelChain™ smart contract
            is simply a
            {' '}
            <code>struct</code>
            {' '}
            that implements the
            {' '}
            <code>SmartContract interface</code>:
          </Text>
          <Code language="go">
            {`// File: /parallelcore/smartcontract/smartcontract.go (part of the SmartContract API)

package smartcontract

import (
  engine "parallelcore-smartcontract-sdk-go/smartcontract_engine"
)

type SmartContract interface {
  Initialize(tr engine.Transaction, in []byte) ([]byte, error)
  Handle(tr engine.Transaction, in []byte) ([]byte, error)
}
`}
          </Code>
        </TextAndCode>
        <Text>
          Let us look a bit closer into
          {' '}
          <code>
            Handle
          </code>
          &apos;s parameters.
        </Text>
        <ol>
          <li>
            <Text>
              <code>tr:</code> an instance of the <code>Transaction</code> struct
              type defined by the ParallelChain Smart Contract SDK. This argument
              is passed into <code>Handle</code> and <code>Initialize</code> by
              the smart contract execution engine running in every peeer node in
              the network. You can always count on this being defined inside the
              function body.
            </Text>
          </li>
          <li>
            <Text>
              <code>in:</code> a generic slice of bytes. The <em>invoker</em> of
              the smart contract&mdash;typically either an application written using
              the ParallelChain Client SDK, or a system administrator using the
              ParallelChain Peer CLI&mdash;passes this into an <code>Invoke</code>
              function.
            </Text>
          </li>
        </ol>
        <TextAndCode>
          <Text>
            The execution engine will then pass this into the <code>Handle</code> method
            of your SmartContract.
          </Text>
          <Code language="go">
            {`// Example: Invocation of 'helloworld' smart contract using ParallelChain Client SDK

in := "helloworld *arg0* *arg1* *argWhatever*"
client.Invoke("helloworld", []byte(in))
`}
          </Code>
        </TextAndCode>
        <Text>
          You can see here how we pass a slice of bytes as the second argument
          to <code>client.Invoke</code>. When we say that in is a generic slice
          of bytes, we really mean <em>generic</em>. You can use anything that
          can be casted/serialized in whatever way into a slice of bytes.
        </Text>
        <Text>
          This reflects the flexible design of the ParallelChain APIs; it is on you,
          the programmer, to define your own ‘mini protocol’ for smart contract
          invocation. In the ‘helloworld’ example we discuss in this document, the
          Handle function body converts <code>in</code> to an array of strings using
          <code>strings.Split</code>, and then grabs the first element of this array
          to be an “<code>’action’</code> parameter” that it conditionally branches
          on to do different actions.
        </Text>
        <Text>
          You now know how to write a generic smart contract for ParallelChain using
          the ParallelChain Smart Contract API. We will move to the next section of
          this guide shortly. But before we continue, you might be wondering where we
          have/you could have specified the smart contract we have discussed to have
          the <code>Invoke</code>-able name ‘helloworld.’ In the next section,
          you will understand that this name is not a property of the source code itself,
          but something that you will have to define when you deploy a smart contract using the
          <em> ParallelChain Peer CLI.</em>
        </Text>
      </Section>
      <Section>
        <TextSubHeading>
          Packaging a Smart Contract
        </TextSubHeading>
        <TextAndCode>
          <Text>
            Now that you have a `<code>Go build</code>`-compilable package, run this command:
            (make sure that you have your development environment set up).
          </Text>
          <Code>
            {`// Bash shell
/opt/parallelcore/bin/make-smartcontract-package.shpackage<invokable-SC-name><directory-to-go-build>
`}
          </Code>
        </TextAndCode>
        <Text>
          The two arguments that you provide are as follows:
        </Text>
        <ol>
          <li>
            <Text>
              <code>&lt;invokable-SC-name&gt;</code>: This is the name that the
              ParallelChain™ network will use to refer to your smart contract once
              it has been deployed. Applications using the ParallelChain™ Client SDK
              or system administrators using the ParallelChain™ Peer CLI will use this
              name to invoke the smart contract.
            </Text>
          </li>
          <li>
            <Text>
              <code>&lt;directory-to-go-build&gt;</code>: Relative link to a typical
              &apos;<code>Go build</code>&apos;-able package containing a smart contract.
            </Text>
          </li>
        </ol>
        <TextAndCode>
          <Text>
            In the case of our &apos;helloworld&apos; example, you would do:
          </Text>
          <Code>
            {`// Bash shell
/opt/parallelcore/bin/make-smartcontract-package.sh package helloworld helloworld/
`}
          </Code>
          <Text>
            This will produce a tar Gzip archive with the file name:
            <code>&lt;invokable-SC-name&gt;.tgz</code>. You now know how to package
            a ParallelChain™ smart contract for deployment. In the next section, we will
            see how we could actually deploy it to a running network.
          </Text>
        </TextAndCode>
      </Section>
      <Section>
        <TextSubHeading>
          Deploying a Smart Contract
        </TextSubHeading>
        <Text>
          &apos;Deploying a smart contract&apos; means transmitting the packaged shared
          library to at least one of the ParallelChain™ network peer nodes over which you
          have authority. Internally, these nodes will persist the smart contracts you
          have deployed into the distributed PCoreDB instance kept consistent across the
          network; this makes it such that they are &apos;logically&apos; part of the network
          even though&mdash;at least initially&mdash;not all peer nodes will have them installed.
        </Text>
        <TextAndCode>
          <Text>
            If your development environment is setup by peter, and a ParallelChain™ peer is running
            on your local machine, then you first need to set three hard-coded environment
            variables. These are used by the <em>ParallelChain Peer CLI</em> to target the
            appropriate peer nodes and authenticate its connections.
          </Text>
          <Code>
            {`// Bash shell
export PCORE_ENDPOINTS=local.digital-transaction.net:5000
export PCORE_CLIENT_ID=demo
expore PCORE_CLIENT_CREDENTIAL=demopass

sudo -E /opt/parallelcore/sbin/parallelcore smartcontract register <SC-name>-<SC-version> <tgz-to-deploy>
`}
          </Code>
        </TextAndCode>
        <Text>
          The three arguments that you provide are as follows:
        </Text>
        <ol>
          <li>
            <Text>
              <code>&lt;SC-name&gt;</code> This has to be the same as what you provided for
              <code>&lt;invokable-SC-name&gt;</code> in the previous section. Internally,
              ParallelChain Peer CLI looks in the /tmp/ directory of your local machine to
              look for metadata associated with smart contracts packaged by the tool. If
              you pass in a different stringfor SC-name, it will fail to find this file.
              You can also find this .json metadata file inside your .tgz
            </Text>
          </li>
          <li>
            <Text>
              <code>&lt;SC-version&gt;</code>: This has to be a string with format:
              <code>`v&lt;version_number&gt;`</code>. version_number starts at 1 if the package
              you are deploying is the first version of the &lt;SC-name&gt; smart contract to be
              installed to the network. In our case, we will use: ‘helloworld-v1’ for the
              combined &lt;SC-name&gt;-&lt;SC-version&gt; parameter.
            </Text>
          </li>
          <li>
            <Text>
              <code>&lt;tgz-to-deploy&gt;</code>: A relative path to a packaged smart contract
              .tgz generated using ParallelChain Peer CLI.
            </Text>
          </li>
        </ol>
        <Text>
          You now know how to deploy smart contracts to a ParallelChain network. In the next
          section, we will look at two ways of invoking smart contracts once you have deployed
          them.
        </Text>
      </Section>
      <Section>
        <TextSubHeading>
          Invoking (running) a Smart Contract
        </TextSubHeading>
        <Text>
          When you invoke a smart contract, either using the ParallelChain Client API, or
          the ParallelChain Peer CLI, your machine makes gRPC requests to machines in the
          ParallelChain network, instructing them to load a smart contract you’ve specified
          and run its Handle method.
        </Text>
      </Section>
      <Section>
        <Text>
          <b>Using the ParallelChain™ Client SDK</b>
        </Text>
        <TextAndCode>
          <Text>
            You have already seen how to do this in &apos;Writing Smart Contract&apos; section:
          </Text>
          <Code>
            {`// Example: Invocation of 'helloworld' smart contract using ParallelChain Client SDK
in := "helloworld *arg0* *arg1* *argWhatever*"
client.Invoke("helloworld", []byte(in))
`}
          </Code>
        </TextAndCode>
        <Text>
          When you think you are ready to build a fully-fledged application that interacts with
          a ParallelChain™ network, you can check out &apos;Writing Applications for
          ParallelChain™&apos;
        </Text>
      </Section>
      <Section>
        <Text>
          <b>
            Using the ParallelChain™ Peer CLI
          </b>
        </Text>
        <TextAndCode>
          <Text>
            You first need to set the below environment variables to make the invocation as
            the client identity ‘demo,’ a client identity with role ‘app.’ By default, only
            clients with role ‘app’ can invoke smart contracts. The client identity ‘root’
            that you used in the ‘Deploying a Smart Contract’ section has a role of ‘admin.’
            To learn more about client roles, check out “The ParallelChain Network Architecture”.
          </Text>
          <Code>
            {`// Bash shell
export PCORE_ENDPOINTS=local.digital-transaction.net:5000
export PCORE_CLIENT_ID=demo
export PCORE_CLIENT_CREDENTIAL=demopass
`}
          </Code>
        </TextAndCode>
        <TextAndCode>
          <Text>
            Running the beside comment produces equivalent results (internally, ParallelChain
            Peer CLI calls on <code>Invoke</code> in the ParallelChain™ Client SDK).
          </Text>
          <Code>
            sudo -E /opt/parallelcore/bin/parallelcore-cli invoke helloworld-v1 helloworld
            Hello World!
          </Code>
        </TextAndCode>
        <Text>
          You now know how to invoke smart contracts deployed in a ParallelChain™ network.
          If you have read the entirity of this document, we suggest you read the Godoc for
          the ParallelChain™ Smart Contract API.
        </Text>
      </Section>
    </>
  );
}
