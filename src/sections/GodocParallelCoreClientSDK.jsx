/* eslint-disable no-tabs */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MetaTags from 'react-meta-tags';

const useStyles = makeStyles({
  godocWrapper: {
    flexGrow: 1,
    display: 'flex',
    flexBasis: 'calc(100vh - 240px)',
    position: 'relative',
    height: '100%',
    overflowY: 'scroll',
  },
});

const innerHTML = `
<div id="page" class="wide">
<div class="container">


  <h1>
    Package parallelcore_client_sdk_go
    <span class="text-muted"></span>
  </h1>







<div id="nav"></div>


<!--
	Copyright 2009 The Go Authors. All rights reserved.
	Use of this source code is governed by a BSD-style
	license that can be found in the LICENSE file.
-->
<!--
	Note: Static (i.e., not template-generated) href and id
	attributes start with "pkg-" to make it impossible for
	them to conflict with generated attributes (some of which
	correspond to Go identifiers).
-->

	<script type='text/javascript'>
	document.ANALYSIS_DATA = null;
	document.CALLGRAPH = null;
	</script>

	
		
		<div id="short-nav">
			<dl>
			<dd><code>import "digital-transaction/pco/parallelcore/client/sdk/go"</code></dd>
			</dl>
			<dl>
			<dd><a href="/references/parallelcore-client-go-sdk#pkg-overview" class="overviewLink">Overview</a></dd>
			<dd><a href="/references/parallelcore-client-go-sdk#pkg-index" class="indexLink">Index</a></dd>
			
			
				<dd><a href="/references/parallelcore-client-go-sdk#pkg-subdirectories">Subdirectories</a></dd>
			
			</dl>
		</div>
		<!-- The package's Name is printed as title by the top-level template -->
		<div id="pkg-overview" class="toggleVisible">
			<div class="collapsed">
				<h2 class="toggleButton" title="Click to show Overview section">Overview ▹</h2>
			</div>
			<div class="expanded">
				<h2 class="toggleButton" title="Click to hide Overview section">Overview ▾</h2>
				<p>
Package parallelcore_client_sdk_go (The ParallelCore Go Client SDK)
enables programmers to develop applications that interact with
ParallelChain networks.
</p>
<p>
This GoDoc might seem massive at first, but don&#39;t feel overwhelmed. Most applications
only need to follow a simple workflow:
</p>
<pre>1. Use OpenAny() to establish a connection from the application to ParallelCore gRPC endpoint(s).
2. Invoke a smart-contract using Invoke(), passing in arguments as a space-delimited string.
3. After the application finishes using the connection, close it using Close()
</pre>
<p>
Copyright 2021 Digital Transaction Limited.
All Rights Reserved.
</p>

				
			</div>
		</div>

		<div id="pkg-index" class="toggleVisible">
		<div class="collapsed">
			<h2 class="toggleButton" title="Click to show Index section">Index ▹</h2>
		</div>
		<div class="expanded">
			<h2 class="toggleButton" title="Click to hide Index section">Index ▾</h2>

		<!-- Table of contents for API; must be named manual-nav to turn off auto nav. -->
			<div id="manual-nav">
			<dl>
			
				<dd><a href="/references/parallelcore-client-go-sdk#pkg-constants">Constants</a></dd>
			
			
			
				
				<dd><a href="/references/parallelcore-client-go-sdk#CloseMany">func CloseMany(clients []*Client)</a></dd>
			
			
				
				<dd><a href="/references/parallelcore-client-go-sdk#ApiAccessControlData">type ApiAccessControlData</a></dd>
				
				
			
				
				<dd><a href="/references/parallelcore-client-go-sdk#ApproveForgetParams">type ApproveForgetParams</a></dd>
				
				
			
				
				<dd><a href="/references/parallelcore-client-go-sdk#BlockData">type BlockData</a></dd>
				
				
			
				
				<dd><a href="/references/parallelcore-client-go-sdk#Client">type Client</a></dd>
				
					
					<dd>&nbsp; &nbsp; <a href="/references/parallelcore-client-go-sdk#OpenAny">func OpenAny(endpointSpecs string, clientID string, credential string, certPath string) (*Client, error)</a></dd>
				
					
					<dd>&nbsp; &nbsp; <a href="/references/parallelcore-client-go-sdk#OpenAnyByToken">func OpenAnyByToken(endpointSpecs string, token string, expireTimestamp int64, certPath string) (*Client, error)</a></dd>
				
					
					<dd>&nbsp; &nbsp; <a href="/references/parallelcore-client-go-sdk#OpenAnyByTokenWithCert">func OpenAnyByTokenWithCert(endpointSpecs string, token string, expireTimestamp int64) (*Client, error)</a></dd>
				
					
					<dd>&nbsp; &nbsp; <a href="/references/parallelcore-client-go-sdk#OpenAnyWithCert">func OpenAnyWithCert(endpointSpecs string, clientID string, credential string) (*Client, error)</a></dd>
				
					
					<dd>&nbsp; &nbsp; <a href="/references/parallelcore-client-go-sdk#OpenMany">func OpenMany(endpointSpecs string, clientID string, credential string, certPath string) ([]*Client, error)</a></dd>
				
					
					<dd>&nbsp; &nbsp; <a href="/references/parallelcore-client-go-sdk#OpenManyByToken">func OpenManyByToken(endpointSpecs string, token string, expireTimestamp int64, certPath string) ([]*Client, error)</a></dd>
				
					
					<dd>&nbsp; &nbsp; <a href="/references/parallelcore-client-go-sdk#OpenManyByTokenWithCert">func OpenManyByTokenWithCert(endpointSpecs string, token string, expireTimestamp int64) ([]*Client, error)</a></dd>
				
					
					<dd>&nbsp; &nbsp; <a href="/references/parallelcore-client-go-sdk#OpenManyWithCert">func OpenManyWithCert(endpointSpecs string, clientID string, credential string) ([]*Client, error)</a></dd>
				
				
					
					<dd>&nbsp; &nbsp; <a href="/references/parallelcore-client-go-sdk#Client.ApproveForget">func (client *Client) ApproveForget(forgetRequestTxID string) (string, error)</a></dd>
				
					
					<dd>&nbsp; &nbsp; <a href="/references/parallelcore-client-go-sdk#Client.CalculateBlockHash">func (client *Client) CalculateBlockHash(chainID string, blockID string) ([]byte, error)</a></dd>
				
					
					<dd>&nbsp; &nbsp; <a href="/references/parallelcore-client-go-sdk#Client.CheckApiAccess">func (client *Client) CheckApiAccess(apiAccessControllerJSON []byte) ([]byte, error)</a></dd>
				
					
					<dd>&nbsp; &nbsp; <a href="/references/parallelcore-client-go-sdk#Client.Close">func (client *Client) Close()</a></dd>
				
					
					<dd>&nbsp; &nbsp; <a href="/references/parallelcore-client-go-sdk#Client.CommitForget">func (client *Client) CommitForget(forgetRequestTxID string, forgetApprovalTxID []string) (x ForgetReport, err error)</a></dd>
				
					
					<dd>&nbsp; &nbsp; <a href="/references/parallelcore-client-go-sdk#Client.CreateClient">func (client *Client) CreateClient(clientDataJSON []byte) ([]byte, error)</a></dd>
				
					
					<dd>&nbsp; &nbsp; <a href="/references/parallelcore-client-go-sdk#Client.CreateDomain">func (client *Client) CreateDomain(domainName []byte) ([]byte, error)</a></dd>
				
					
					<dd>&nbsp; &nbsp; <a href="/references/parallelcore-client-go-sdk#Client.CreateUser">func (client *Client) CreateUser(userID string, password string, roles []string, domains []string) (string, error)</a></dd>
				
					
					<dd>&nbsp; &nbsp; <a href="/references/parallelcore-client-go-sdk#Client.DeleteUser">func (client *Client) DeleteUser(userID string, userDomainName string) (string, error)</a></dd>
				
					
					<dd>&nbsp; &nbsp; <a href="/references/parallelcore-client-go-sdk#Client.GetBlockDetailsJson">func (client *Client) GetBlockDetailsJson(chainID string, blockID string) ([]byte, error)</a></dd>
				
					
					<dd>&nbsp; &nbsp; <a href="/references/parallelcore-client-go-sdk#Client.GetBlockchainSummaryJson">func (client *Client) GetBlockchainSummaryJson() ([]byte, error)</a></dd>
				
					
					<dd>&nbsp; &nbsp; <a href="/references/parallelcore-client-go-sdk#Client.GetSmartContractTransactionJson">func (client *Client) GetSmartContractTransactionJson(transactionId string) ([]byte, error)</a></dd>
				
					
					<dd>&nbsp; &nbsp; <a href="/references/parallelcore-client-go-sdk#Client.GetSmartContractTransactionMetadataJson">func (client *Client) GetSmartContractTransactionMetadataJson(transactionId string) ([]byte, error)</a></dd>
				
					
					<dd>&nbsp; &nbsp; <a href="/references/parallelcore-client-go-sdk#Client.GetToken">func (client *Client) GetToken() string</a></dd>
				
					
					<dd>&nbsp; &nbsp; <a href="/references/parallelcore-client-go-sdk#Client.GetTokenExpTime">func (client *Client) GetTokenExpTime() int64</a></dd>
				
					
					<dd>&nbsp; &nbsp; <a href="/references/parallelcore-client-go-sdk#Client.GetUserInfo">func (client *Client) GetUserInfo(clientID string) (UserFullData, error)</a></dd>
				
					
					<dd>&nbsp; &nbsp; <a href="/references/parallelcore-client-go-sdk#Client.GetUserInfos">func (client *Client) GetUserInfos(allDomains bool, domainName string) ([]UserFullDataWrapper, error)</a></dd>
				
					
					<dd>&nbsp; &nbsp; <a href="/references/parallelcore-client-go-sdk#Client.GrantAccess">func (client *Client) GrantAccess(clientAccessDataJSON []byte) ([]byte, error)</a></dd>
				
					
					<dd>&nbsp; &nbsp; <a href="/references/parallelcore-client-go-sdk#Client.GrantDomainAdmin">func (client *Client) GrantDomainAdmin(in []byte) ([]byte, error)</a></dd>
				
					
					<dd>&nbsp; &nbsp; <a href="/references/parallelcore-client-go-sdk#Client.IdentifiedInvoke">func (client *Client) IdentifiedInvoke(smartContractSpec string, args []byte) ([]byte, string, error)</a></dd>
				
					
					<dd>&nbsp; &nbsp; <a href="/references/parallelcore-client-go-sdk#Client.Invoke">func (client *Client) Invoke(smartContractSpec string, args []byte) ([]byte, error)</a></dd>
				
					
					<dd>&nbsp; &nbsp; <a href="/references/parallelcore-client-go-sdk#Client.ListClient">func (client *Client) ListClient(clientID []byte) ([]byte, error)</a></dd>
				
					
					<dd>&nbsp; &nbsp; <a href="/references/parallelcore-client-go-sdk#Client.ListClients">func (client *Client) ListClients(query []byte) ([]byte, error)</a></dd>
				
					
					<dd>&nbsp; &nbsp; <a href="/references/parallelcore-client-go-sdk#Client.ListDomain">func (client *Client) ListDomain(domainName []byte) ([]byte, error)</a></dd>
				
					
					<dd>&nbsp; &nbsp; <a href="/references/parallelcore-client-go-sdk#Client.ListForgetGroups">func (client *Client) ListForgetGroups(txIds []string) (x []ForgetGroup, err error)</a></dd>
				
					
					<dd>&nbsp; &nbsp; <a href="/references/parallelcore-client-go-sdk#Client.ListInvokableSC">func (client *Client) ListInvokableSC() ([]byte, error)</a></dd>
				
					
					<dd>&nbsp; &nbsp; <a href="/references/parallelcore-client-go-sdk#Client.ListLatestTransactions">func (client *Client) ListLatestTransactions(count int) ([]byte, error)</a></dd>
				
					
					<dd>&nbsp; &nbsp; <a href="/references/parallelcore-client-go-sdk#Client.ListManagedDomains">func (client *Client) ListManagedDomains(userID []byte) ([]byte, error)</a></dd>
				
					
					<dd>&nbsp; &nbsp; <a href="/references/parallelcore-client-go-sdk#Client.ListSmartContract">func (client *Client) ListSmartContract(scName []byte) ([]byte, error)</a></dd>
				
					
					<dd>&nbsp; &nbsp; <a href="/references/parallelcore-client-go-sdk#Client.ListSmartContracts">func (client *Client) ListSmartContracts(query []byte) ([]byte, error)</a></dd>
				
					
					<dd>&nbsp; &nbsp; <a href="/references/parallelcore-client-go-sdk#Client.ManageApiAccess">func (client *Client) ManageApiAccess(in []byte) ([]byte, error)</a></dd>
				
					
					<dd>&nbsp; &nbsp; <a href="/references/parallelcore-client-go-sdk#Client.RegisterEventListener">func (client *Client) RegisterEventListener(scName string, eventFilter string) (*ListenerController, &lt;-chan *EventWrapper, error)</a></dd>
				
					
					<dd>&nbsp; &nbsp; <a href="/references/parallelcore-client-go-sdk#Client.RegisterSmartContract">func (client *Client) RegisterSmartContract(scRegistration []byte) ([]byte, error)</a></dd>
				
					
					<dd>&nbsp; &nbsp; <a href="/references/parallelcore-client-go-sdk#Client.RemoveClient">func (client *Client) RemoveClient(clientDomainDataJSON []byte) ([]byte, error)</a></dd>
				
					
					<dd>&nbsp; &nbsp; <a href="/references/parallelcore-client-go-sdk#Client.Renew">func (client *Client) Renew() error</a></dd>
				
					
					<dd>&nbsp; &nbsp; <a href="/references/parallelcore-client-go-sdk#Client.RequestForget">func (client *Client) RequestForget(txIds []string) (string, error)</a></dd>
				
					
					<dd>&nbsp; &nbsp; <a href="/references/parallelcore-client-go-sdk#Client.RevokeAccess">func (client *Client) RevokeAccess(clientAccessDataJSON []byte) ([]byte, error)</a></dd>
				
					
					<dd>&nbsp; &nbsp; <a href="/references/parallelcore-client-go-sdk#Client.RevokeDomainAdmin">func (client *Client) RevokeDomainAdmin(in []byte) ([]byte, error)</a></dd>
				
					
					<dd>&nbsp; &nbsp; <a href="/references/parallelcore-client-go-sdk#Client.SysMan">func (client *Client) SysMan(in []byte) ([]byte, error)</a></dd>
				
					
					<dd>&nbsp; &nbsp; <a href="/references/parallelcore-client-go-sdk#Client.UpdateClient">func (client *Client) UpdateClient(clientDataJSON []byte) ([]byte, error)</a></dd>
				
					
					<dd>&nbsp; &nbsp; <a href="/references/parallelcore-client-go-sdk#Client.UpdateSelfCredential">func (client *Client) UpdateSelfCredential(clientID string, credential string) ([]byte, error)</a></dd>
				
					
					<dd>&nbsp; &nbsp; <a href="/references/parallelcore-client-go-sdk#Client.UpdateUser">func (client *Client) UpdateUser(userID string, password string, roles []string, domains []string) (string, error)</a></dd>
				
			
				
				<dd><a href="/references/parallelcore-client-go-sdk#CommitForgetParams">type CommitForgetParams</a></dd>
				
				
			
				
				<dd><a href="/references/parallelcore-client-go-sdk#EventWrapper">type EventWrapper</a></dd>
				
				
			
				
				<dd><a href="/references/parallelcore-client-go-sdk#ForgetGroup">type ForgetGroup</a></dd>
				
				
			
				
				<dd><a href="/references/parallelcore-client-go-sdk#ForgetReport">type ForgetReport</a></dd>
				
				
			
				
				<dd><a href="/references/parallelcore-client-go-sdk#GetSmartContractTransactionOptions">type GetSmartContractTransactionOptions</a></dd>
				
				
			
				
				<dd><a href="/references/parallelcore-client-go-sdk#InfoListData">type InfoListData</a></dd>
				
				
			
				
				<dd><a href="/references/parallelcore-client-go-sdk#ListenerController">type ListenerController</a></dd>
				
				
					
					<dd>&nbsp; &nbsp; <a href="/references/parallelcore-client-go-sdk#ListenerController.Close">func (cc ListenerController) Close()</a></dd>
				
			
				
				<dd><a href="/references/parallelcore-client-go-sdk#RegisterEventListenerRequest">type RegisterEventListenerRequest</a></dd>
				
				
			
				
				<dd><a href="/references/parallelcore-client-go-sdk#RequestForgetParams">type RequestForgetParams</a></dd>
				
				
			
				
				<dd><a href="/references/parallelcore-client-go-sdk#ScEvent">type ScEvent</a></dd>
				
				
			
				
				<dd><a href="/references/parallelcore-client-go-sdk#SmartContractData">type SmartContractData</a></dd>
				
				
			
				
				<dd><a href="/references/parallelcore-client-go-sdk#SysManData">type SysManData</a></dd>
				
				
			
				
				<dd><a href="/references/parallelcore-client-go-sdk#UserAccessData">type UserAccessData</a></dd>
				
				
			
				
				<dd><a href="/references/parallelcore-client-go-sdk#UserData">type UserData</a></dd>
				
				
			
				
				<dd><a href="/references/parallelcore-client-go-sdk#UserDomainData">type UserDomainData</a></dd>
				
				
			
				
				<dd><a href="/references/parallelcore-client-go-sdk#UserFullData">type UserFullData</a></dd>
				
				
			
				
				<dd><a href="/references/parallelcore-client-go-sdk#UserFullDataWrapper">type UserFullDataWrapper</a></dd>
				
				
			
				
				<dd><a href="/references/parallelcore-client-go-sdk#UserManData">type UserManData</a></dd>
				
				
			
			
				
				<dd><a href="/references/parallelcore-client-go-sdk#pkg-note-BUG">Bugs</a></dd>
				
			
			</dl>
			</div><!-- #manual-nav -->

		

		
			<h3>Package files</h3>
			<p>
			<span style="font-size:90%">
			
				<a>SysManHelper.go</a>
			
				<a>UserManHelper.go</a>
			
				<a>api.go</a>
			
				<a>api_access.go</a>
			
				<a>api_auth.go</a>
			
				<a>api_blockchain.go</a>
			
				<a>api_domain.go</a>
			
				<a>api_invoke.go</a>
			
				<a>api_open_any.go</a>
			
				<a>api_open_any_token.go</a>
			
				<a>api_open_many.go</a>
			
				<a>api_open_many_token.go</a>
			
				<a>api_open_one.go</a>
			
				<a>api_registerEventListener.go</a>
			
				<a>api_rightToForget.go</a>
			
				<a>api_smartcontract.go</a>
			
				<a>api_sysMan.go</a>
			
				<a>api_transaction.go</a>
			
				<a>api_user.go</a>
			
				<a>api_userMan.go</a>
			
				<a>constants.go</a>
			
				<a>customCredential.go</a>
			
				<a>structs.go</a>
			
				<a>util_security_jwt.go</a>
			
			</span>
			</p>
		
		</div><!-- .expanded -->
		</div><!-- #pkg-index -->

		<div id="pkg-callgraph" class="toggle" style="display: none">
		<div class="collapsed">
			<h2 class="toggleButton" title="Click to show Internal Call Graph section">Internal call graph ▹</h2>
		</div> <!-- .expanded -->
		<div class="expanded">
			<h2 class="toggleButton" title="Click to hide Internal Call Graph section">Internal call graph ▾</h2>
			<p>
			  In the call graph viewer below, each node
			  is a function belonging to this package
			  and its children are the functions it
			  calls&mdash;perhaps dynamically.
			</p>
			<p>
			  The root nodes are the entry points of the
			  package: functions that may be called from
			  outside the package.
			  There may be non-exported or anonymous
			  functions among them if they are called
			  dynamically from another package.
			</p>
			<p>
			  Click a node to visit that function's source code.
			  From there you can visit its callers by
			  clicking its declaring <code>func</code>
			  token.
			</p>
			<p>
			  Functions may be omitted if they were
			  determined to be unreachable in the
			  particular programs or tests that were
			  analyzed.
			</p>
			<!-- Zero means show all package entry points. -->
			<ul style="margin-left: 0.5in" id="callgraph-0" class="treeview"></ul>
		</div>
		</div> <!-- #pkg-callgraph -->

		
			<h2 id="pkg-constants">Constants</h2>
			
				
				<pre>const (
    <span id="DOMAIN_DEFAULT">DOMAIN_DEFAULT</span> = &#34;default&#34;

    <span id="E_FUNC_X_OUTPUT_DECODE_ERROR_X">E_FUNC_X_OUTPUT_DECODE_ERROR_X</span>     = &#34;CLIENT: %s: Output decoding Error (%w)&#34;
    <span id="E_FUNC_X_ERROR_X">E_FUNC_X_ERROR_X</span>                   = &#34;CLIENT: %s: %w&#34;
    <span id="FMT_FUNC_X_INPUT_ENCODE_ERROR_X">FMT_FUNC_X_INPUT_ENCODE_ERROR_X</span>    = &#34;CLIENT: %s: Input encoding Error (%w)&#34;
    <span id="FMT_FUNC_X_TASK_ENCODE_ERROR_X">FMT_FUNC_X_TASK_ENCODE_ERROR_X</span>     = &#34;CLIENT: %s: Task encoding Error (%w)&#34;
    <span id="FMT_FUNC_X_RESPONSE_ERROR_X">FMT_FUNC_X_RESPONSE_ERROR_X</span>        = &#34;CLIENT: %s: Response Error (%w)&#34;
    <span id="FMT_FUNC_X_OPEN_CONNECTION_ERROR_X">FMT_FUNC_X_OPEN_CONNECTION_ERROR_X</span> = &#34;CLIENT: %s: Failed to open a connection Error (%w)&#34;
    <span id="FMT_FUNC_X_NO_SUCCESS_MSG">FMT_FUNC_X_NO_SUCCESS_MSG</span>          = &#34;CLIENT: %s: Did not receive expected success message&#34;

    <span class="comment">// User Functions</span>
    <span id="API_UPDATE_SELF_CREDENTIAL">API_UPDATE_SELF_CREDENTIAL</span>                  = &#34;updateSelfCredential&#34;
    <span id="API_LIST_INVOKABLE_SC">API_LIST_INVOKABLE_SC</span>                       = &#34;ListInvokableSC&#34;
    <span id="API_LIST_LATEST_TRANSACTION">API_LIST_LATEST_TRANSACTION</span>                 = &#34;ListLatestTransactions&#34;
    <span id="API_GET_BLOCK_CHAIN_SUMMARY_JSON">API_GET_BLOCK_CHAIN_SUMMARY_JSON</span>            = &#34;GetBlockchainSummaryJson&#34;
    <span id="API_GET_BLOCK_DETAILS_JSON">API_GET_BLOCK_DETAILS_JSON</span>                  = &#34;GetBlockDetailsJson&#34;
    <span id="API_GET_SMARTCONTRACT_TRANSACTION_JSON">API_GET_SMARTCONTRACT_TRANSACTION_JSON</span>      = &#34;GetSmartContractTransactionJson&#34;
    <span id="API_GET_SMARTCONTRACT_TRANSACTION_META_JSON">API_GET_SMARTCONTRACT_TRANSACTION_META_JSON</span> = &#34;GetSmartContractTransactionMetadataJson&#34;
    <span id="API_CALCULATE_BLOCK_HASH">API_CALCULATE_BLOCK_HASH</span>                    = &#34;CalculateBlockHash&#34;

    <span class="comment">// System Calls</span>
    <span id="API_CREATE_DOMAIN">API_CREATE_DOMAIN</span>             = &#34;createDomain&#34;
    <span id="API_LIST_DOMAIN">API_LIST_DOMAIN</span>               = &#34;listDomain&#34;
    <span id="API_LIST_MANAGED_DOMAINS">API_LIST_MANAGED_DOMAINS</span>      = &#34;listManagedDomains&#34;
    <span id="API_GRANT_DOMAIN_ADMIN">API_GRANT_DOMAIN_ADMIN</span>        = &#34;grantDomainAdmin&#34;
    <span id="API_REVOKE_DOMAIN_ADMIN">API_REVOKE_DOMAIN_ADMIN</span>       = &#34;revokeDomainAdmin&#34;
    <span id="API_CREATE_CLIENT">API_CREATE_CLIENT</span>             = &#34;createClient&#34;
    <span id="API_UPDATE_CLIENT">API_UPDATE_CLIENT</span>             = &#34;updateClient&#34;
    <span id="API_REMOVE_CLIENT">API_REMOVE_CLIENT</span>             = &#34;removeClient&#34;
    <span id="API_LIST_CLIENT">API_LIST_CLIENT</span>               = &#34;listClient&#34;
    <span id="API_LIST_CLIENTS">API_LIST_CLIENTS</span>              = &#34;listClients&#34;
    <span id="API_GRANT_ACCESS">API_GRANT_ACCESS</span>              = &#34;grantAccess&#34;
    <span id="API_REVOKE_ACCESS">API_REVOKE_ACCESS</span>             = &#34;revokeAccess&#34;
    <span id="API_ACCESS">API_ACCESS</span>                    = &#34;apiAccess&#34;
    <span id="API_CHECK_API_ACCESS">API_CHECK_API_ACCESS</span>          = &#34;CheckApiAccess&#34;
    <span id="API_MANAGE_API_ACCESS">API_MANAGE_API_ACCESS</span>         = &#34;ManageApiAccess&#34;
    <span id="API_REGISTER_SMARTCONTRACT">API_REGISTER_SMARTCONTRACT</span>    = &#34;registerSmartContract&#34;
    <span id="API_LIST_SMARTCONTRACT">API_LIST_SMARTCONTRACT</span>        = &#34;listSmartContract&#34;
    <span id="API_LIST_SMARTCONTRACTS">API_LIST_SMARTCONTRACTS</span>       = &#34;listSmartContracts&#34;
    <span id="API_LIST_DOMAIN_SMARTCONTRACT">API_LIST_DOMAIN_SMARTCONTRACT</span> = &#34;listDomainSmartContract&#34;
    <span id="API_REGISTER_EVENT_LISTENER">API_REGISTER_EVENT_LISTENER</span>   = &#34;registerEventListener&#34;
    <span id="API_SYS_MAN">API_SYS_MAN</span>                   = &#34;SysMan&#34;
    <span id="API_USER_MAN">API_USER_MAN</span>                  = &#34;UserMan&#34;

    <span class="comment">// Right To Forget</span>
    <span id="API_REQUEST_FORGET">API_REQUEST_FORGET</span>     = &#34;requestForget&#34;
    <span id="API_APPROVE_FORGET">API_APPROVE_FORGET</span>     = &#34;approveForget&#34;
    <span id="API_COMMIT_FORGET">API_COMMIT_FORGET</span>      = &#34;commitForget&#34;
    <span id="API_LIST_FORGET_GROUPS">API_LIST_FORGET_GROUPS</span> = &#34;listForgetGroups&#34;
)</pre>
			
		
		
		
			
			
			<h2 id="CloseMany">func <a>CloseMany</a>
				<a class="permalink" href="/references/parallelcore-client-go-sdk#CloseMany">&#xb6;</a>
			</h2>
			<pre>func CloseMany(clients []*<a href="/references/parallelcore-client-go-sdk#Client">Client</a>)</pre>
			<p>
CloseMany is similar to client.Close, but closes many clients.
</p>

			
			

		
		
			
			
			<h2 id="ApiAccessControlData">type <a>ApiAccessControlData</a>
				<a class="permalink" href="/references/parallelcore-client-go-sdk#ApiAccessControlData">&#xb6;</a>
			</h2>
			
			<pre>type ApiAccessControlData struct {
<span id="ApiAccessControlData.Operation"></span>    Operation <a>string</a> \`json:&#34;operation&#34;\`
<span id="ApiAccessControlData.ApiName"></span>    ApiName   <a>string</a> \`json:&#34;api&#34;\`
<span id="ApiAccessControlData.Options"></span>    Options   []<a>byte</a> \`json:&#34;options&#34;\`
}</pre>

			

			

			
			
			

			

			
		
			
			
			<h2 id="ApproveForgetParams">type <a>ApproveForgetParams</a>
				<a class="permalink" href="/references/parallelcore-client-go-sdk#ApproveForgetParams">&#xb6;</a>
			</h2>
			
			<pre>type ApproveForgetParams struct {
<span id="ApproveForgetParams.RequestTxId"></span>    RequestTxId <a>string</a> \`json:&#34;request_tx_id&#34;\`
}</pre>

			

			

			
			
			

			

			
		
			
			
			<h2 id="BlockData">type <a>BlockData</a>
				<a class="permalink" href="/references/parallelcore-client-go-sdk#BlockData">&#xb6;</a>
			</h2>
			
			<pre>type BlockData struct {
<span id="BlockData.ChainId"></span>    ChainId <a>string</a> \`json:&#34;chainId&#34;\`
<span id="BlockData.BlockId"></span>    BlockId <a>string</a> \`json:&#34;blockId&#34;\`
}</pre>

			

			

			
			
			

			

			
		
			
			
			<h2 id="Client">type <a>Client</a>
				<a class="permalink" href="/references/parallelcore-client-go-sdk#Client">&#xb6;</a>
			</h2>
			<p>
Client represents a connection to a ParallelCore node.
</p>
<p>
It provides all of the methods an credentialed &#39;application&#39; (program running
outside of the blockchain network; for example in a desktop, website,
or mobile phone) can use to invoke smart contracts, perform system
administration, inspect the blockchain, etc.
</p>
<p>
The typical procedure to instantiate a Client is to call
ClientSDK.OpenAny or ClientSDK.OpenMany.
</p>

			<pre>type Client struct {
    <span class="comment">// contains filtered or unexported fields</span>
}</pre>

			

			

			
			
			

			
				
				<h3 id="OpenAny">func <a>OpenAny</a>
					<a class="permalink" href="/references/parallelcore-client-go-sdk#OpenAny">&#xb6;</a>
				</h3>
				<pre>func OpenAny(endpointSpecs <a>string</a>, clientID <a>string</a>, credential <a>string</a>, certPath <a>string</a>) (*<a href="/references/parallelcore-client-go-sdk#Client">Client</a>, <a>error</a>)</pre>
				<p>
OpenAny establishes and returns one client connection to a ParallelChain peer. It takes in:
</p>
<pre>- endpointSpecs string: space-delimited list of endpoints. This may contain however many endpoints,
but OpenAny will only choose one to connect to. If a connection attempt fails, it will choose another
endpoint.
- clientID string
- clientCredential string
- certPath string: file path to a TLS certificate to set up an encrypted connection. If certPath is empty,
the system certificate pool will be used.
</pre>

				
				
			
				
				<h3 id="OpenAnyByToken">func <a>OpenAnyByToken</a>
					<a class="permalink" href="/references/parallelcore-client-go-sdk#OpenAnyByToken">&#xb6;</a>
				</h3>
				<pre>func OpenAnyByToken(endpointSpecs <a>string</a>, token <a>string</a>, expireTimestamp <a>int64</a>, certPath <a>string</a>) (*<a href="/references/parallelcore-client-go-sdk#Client">Client</a>, <a>error</a>)</pre>
				<p>
OpenAnyByToken is similar to OpenAny, but uses token instead of ID-password based authentication
to create the connection. You typically need to call the &#39;non-token&#39; varieties of Open somewhere
before calling this function to get its returned client.Token to be passed in as a valid token
for this function.
</p>
<p>
As such, OpenAnyByToken cannot completely replace OpenAny.
</p>
<p>
It takes in:
</p>
<pre>- endpointsSpecs string
- token string: JWT token generated by a ParallelCore engine
- expireTimestamp: used to populate returned client.ExpireTimestamp. This helps applications
determine when to Renew clients. See Client.Renew().
</pre>

				
				
			
				
				<h3 id="OpenAnyByTokenWithCert">func <a>OpenAnyByTokenWithCert</a>
					<a class="permalink" href="/references/parallelcore-client-go-sdk#OpenAnyByTokenWithCert">&#xb6;</a>
				</h3>
				<pre>func OpenAnyByTokenWithCert(endpointSpecs <a>string</a>, token <a>string</a>, expireTimestamp <a>int64</a>) (*<a href="/references/parallelcore-client-go-sdk#Client">Client</a>, <a>error</a>)</pre>
				<p>
OpenAnyByTokenWithCert is a wrapper around OpenAnyByToken. It calls OpenAnyByToken with os.Getenv(&#34;PCORE_CERT_PATH&#34;)
as the certPath parameter.
</p>

				
				
			
				
				<h3 id="OpenAnyWithCert">func <a>OpenAnyWithCert</a>
					<a class="permalink" href="/references/parallelcore-client-go-sdk#OpenAnyWithCert">&#xb6;</a>
				</h3>
				<pre>func OpenAnyWithCert(endpointSpecs <a>string</a>, clientID <a>string</a>, credential <a>string</a>) (*<a href="/references/parallelcore-client-go-sdk#Client">Client</a>, <a>error</a>)</pre>
				<p>
OpenAnyWithCert is a wrapper around OpenAny. It calls OpenAny with os.Getenv(&#34;PCORE_CERT_PATH&#34;)
as the certPath parameter.
</p>

				
				
			
				
				<h3 id="OpenMany">func <a>OpenMany</a>
					<a class="permalink" href="/references/parallelcore-client-go-sdk#OpenMany">&#xb6;</a>
				</h3>
				<pre>func OpenMany(endpointSpecs <a>string</a>, clientID <a>string</a>, credential <a>string</a>, certPath <a>string</a>) ([]*<a href="/references/parallelcore-client-go-sdk#Client">Client</a>, <a>error</a>)</pre>
				<p>
OpenMany is similar to OpenAny, taking in the same parameters, but tries connect to all endpoints instead
of one. Accordingly, it returns a list of Clients instead of just one. If one connection attempt fails,
OpenMany skips the endpoint.
</p>
<p>
If all connection attempts fail, it will return (nil, error). Otherwise, error is the last error
encountered during connection attempts. Applications should check whether or not []*Client is nil
to determine if OpenMany succeeded to establish some connections. Do not use error for this purpose.
</p>

				
				
			
				
				<h3 id="OpenManyByToken">func <a>OpenManyByToken</a>
					<a class="permalink" href="/references/parallelcore-client-go-sdk#OpenManyByToken">&#xb6;</a>
				</h3>
				<pre>func OpenManyByToken(endpointSpecs <a>string</a>, token <a>string</a>, expireTimestamp <a>int64</a>, certPath <a>string</a>) ([]*<a href="/references/parallelcore-client-go-sdk#Client">Client</a>, <a>error</a>)</pre>
				<p>
OpenManyByToken is similar to OpenMany, but uses the the token-based authentication
OpenAnyByToken uses. An authentication token generated by a ParallelChain peer node
is valid for all peer nodes.
</p>

				
				
			
				
				<h3 id="OpenManyByTokenWithCert">func <a>OpenManyByTokenWithCert</a>
					<a class="permalink" href="/references/parallelcore-client-go-sdk#OpenManyByTokenWithCert">&#xb6;</a>
				</h3>
				<pre>func OpenManyByTokenWithCert(endpointSpecs <a>string</a>, token <a>string</a>, expireTimestamp <a>int64</a>) ([]*<a href="/references/parallelcore-client-go-sdk#Client">Client</a>, <a>error</a>)</pre>
				<p>
OpenManyByTokenWithCert is a wrapper around OpenManyByToken. It calls OpenManyByToken with os.Getenv(&#34;PCORE_CERT_PATH&#34;)
as the certPath parameter.
</p>

				
				
			
				
				<h3 id="OpenManyWithCert">func <a>OpenManyWithCert</a>
					<a class="permalink" href="/references/parallelcore-client-go-sdk#OpenManyWithCert">&#xb6;</a>
				</h3>
				<pre>func OpenManyWithCert(endpointSpecs <a>string</a>, clientID <a>string</a>, credential <a>string</a>) ([]*<a href="/references/parallelcore-client-go-sdk#Client">Client</a>, <a>error</a>)</pre>
				<p>
OpenManyWithCert is a wrapper around OpenMany. It calls OpenMany with os.Getenv(&#34;PCORE_CERT_PATH&#34;)
as the certPath parameter.
</p>

				
				
			

			
				
				<h3 id="Client.ApproveForget">func (*Client) <a>ApproveForget</a>
					<a class="permalink" href="/references/parallelcore-client-go-sdk#Client.ApproveForget">&#xb6;</a>
				</h3>
				<pre>func (client *<a href="/references/parallelcore-client-go-sdk#Client">Client</a>) ApproveForget(forgetRequestTxID <a>string</a>) (<a>string</a>, <a>error</a>)</pre>
				<p>
ApproveForget approves deletion of a forget request created using RequestFormet
It returns a string, forgetApprovalTxID, which can be used to commit the forget request
using CommitForget.
</p>
<p>
Permissions: Only super-admins.
</p>

				
				
				
			
				
				<h3 id="Client.CalculateBlockHash">func (*Client) <a>CalculateBlockHash</a>
					<a class="permalink" href="/references/parallelcore-client-go-sdk#Client.CalculateBlockHash">&#xb6;</a>
				</h3>
				<pre>func (client *<a href="/references/parallelcore-client-go-sdk#Client">Client</a>) CalculateBlockHash(chainID <a>string</a>, blockID <a>string</a>) ([]<a>byte</a>, <a>error</a>)</pre>
				<p>
CalculateBlockHash returns a string that is the of the block identified by chainID
and blockID.
</p>

				
				
				
			
				
				<h3 id="Client.CheckApiAccess">func (*Client) <a>CheckApiAccess</a>
					<a class="permalink" href="/references/parallelcore-client-go-sdk#Client.CheckApiAccess">&#xb6;</a>
				</h3>
				<pre>func (client *<a href="/references/parallelcore-client-go-sdk#Client">Client</a>) CheckApiAccess(apiAccessControllerJSON []<a>byte</a>) ([]<a>byte</a>, <a>error</a>)</pre>
				<p>
CheckApiAccess ...
</p>

				
				
				
			
				
				<h3 id="Client.Close">func (*Client) <a>Close</a>
					<a class="permalink" href="/references/parallelcore-client-go-sdk#Client.Close">&#xb6;</a>
				</h3>
				<pre>func (client *<a href="/references/parallelcore-client-go-sdk#Client">Client</a>) Close()</pre>
				<p>
Close closes a Client&#39;s connection.
</p>

				
				
				
			
				
				<h3 id="Client.CommitForget">func (*Client) <a>CommitForget</a>
					<a class="permalink" href="/references/parallelcore-client-go-sdk#Client.CommitForget">&#xb6;</a>
				</h3>
				<pre>func (client *<a href="/references/parallelcore-client-go-sdk#Client">Client</a>) CommitForget(forgetRequestTxID <a>string</a>, forgetApprovalTxID []<a>string</a>) (x <a href="/references/parallelcore-client-go-sdk#ForgetReport">ForgetReport</a>, err <a>error</a>)</pre>
				<p>
CommitForget commits (actually performs) the deletion of all transactions specified
in the txIds originally passed to the RequestForget call that produced forgetRequestTxID.
</p>
<p>
It returns a JSON-encoded object with keys:
</p>
<pre>- deleted list: txIds in the forget group actually deleted by the commit
- already_deleted list: txIds that were deleted before this commit
- not_found: txIds in the forget group that were invalid or not found
- commit_tx_id: transaction ID of the commit forget transaction.
</pre>
<p>
Permissions: Only super-admins.
</p>

				
				
				
			
				
				<h3 id="Client.CreateClient">func (*Client) <a>CreateClient</a>
					<a class="permalink" href="/references/parallelcore-client-go-sdk#Client.CreateClient">&#xb6;</a>
				</h3>
				<pre>func (client *<a href="/references/parallelcore-client-go-sdk#Client">Client</a>) CreateClient(clientDataJSON []<a>byte</a>) ([]<a>byte</a>, <a>error</a>)</pre>
				<p>
CreateClient (deprecated in favor of CreateUser) registers a new
user in the ParallelChain network. It takes in a JSON-encoded object with fields:
</p>
<pre>- clientId string
- clientCredential string
- clientRoles string
- clientDomainName Array of string or empty string: if empty defaults to &#39;default&#39; domain
</pre>
<p>
If the calling user is not a super-admin, they can only create clients in domains
that they manage.
</p>
<p>
Permissions: Only super-admins and domain-admins
</p>

				
				
				
			
				
				<h3 id="Client.CreateDomain">func (*Client) <a>CreateDomain</a>
					<a class="permalink" href="/references/parallelcore-client-go-sdk#Client.CreateDomain">&#xb6;</a>
				</h3>
				<pre>func (client *<a href="/references/parallelcore-client-go-sdk#Client">Client</a>) CreateDomain(domainName []<a>byte</a>) ([]<a>byte</a>, <a>error</a>)</pre>
				<p>
CreateDomain takes in a string domainName and creates a domain with that name. It returns
the boolean true if the operation was successful, and (false, error) otherwise.
</p>
<p>
Permissions: Only super-admins
</p>

				
				
				
			
				
				<h3 id="Client.CreateUser">func (*Client) <a>CreateUser</a>
					<a class="permalink" href="/references/parallelcore-client-go-sdk#Client.CreateUser">&#xb6;</a>
				</h3>
				<pre>func (client *<a href="/references/parallelcore-client-go-sdk#Client">Client</a>) CreateUser(userID <a>string</a>, password <a>string</a>, roles []<a>string</a>, domains []<a>string</a>) (<a>string</a>, <a>error</a>)</pre>
				<p>
CreateUser registers a new user in the ParallelChain network. It takes in parameters:
</p>
<pre>- clientID string
- password string
- roles []string: cannot be empty
- domains []string: defaults to [&#39;default&#39;] if empty.
</pre>
<p>
If the calling user is not a super-admin, they can only create clients in domains that
they manage.
</p>
<p>
Permissions: Only super-admins and domain-admins.
</p>

				
				
				
			
				
				<h3 id="Client.DeleteUser">func (*Client) <a>DeleteUser</a>
					<a class="permalink" href="/references/parallelcore-client-go-sdk#Client.DeleteUser">&#xb6;</a>
				</h3>
				<pre>func (client *<a href="/references/parallelcore-client-go-sdk#Client">Client</a>) DeleteUser(userID <a>string</a>, userDomainName <a>string</a>) (<a>string</a>, <a>error</a>)</pre>
				<p>
DeleteUser completely removes the user identified by userID from the network. The calling user
can only remove users in domains that they manage, and cannot remove themselves.  userDomainName
can be the name of any domain that the user is part of, and defaults to &#39;default&#39; if it is an
empty string.
</p>
<p>
Permissions: Only super-admins or domain-admins
</p>
<p>
BUG(DeleteUser): DeleteUser: non super-admins should not be allowed to remove a user from the network
entirely. Presently, &#39;mere&#39; domain-admins are allowed to do this.
</p>

				
				
				
			
				
				<h3 id="Client.GetBlockDetailsJson">func (*Client) <a>GetBlockDetailsJson</a>
					<a class="permalink" href="/references/parallelcore-client-go-sdk#Client.GetBlockDetailsJson">&#xb6;</a>
				</h3>
				<pre>func (client *<a href="/references/parallelcore-client-go-sdk#Client">Client</a>) GetBlockDetailsJson(chainID <a>string</a>, blockID <a>string</a>) ([]<a>byte</a>, <a>error</a>)</pre>
				<p>
GetBlockDetailsJson returns a JSON-encoded object with information about the block
identified by chainID and blockID.
</p>
<p>
The returned object has fields:
</p>
<pre>- block string
- block_number int
- chain_id string
- chunkset_count int
- creation_timestamp int
- hash string
- machine_id string
- network_address string
- pcore_id string
- prev_hash string
- status int
</pre>

				
				
				
			
				
				<h3 id="Client.GetBlockchainSummaryJson">func (*Client) <a>GetBlockchainSummaryJson</a>
					<a class="permalink" href="/references/parallelcore-client-go-sdk#Client.GetBlockchainSummaryJson">&#xb6;</a>
				</h3>
				<pre>func (client *<a href="/references/parallelcore-client-go-sdk#Client">Client</a>) GetBlockchainSummaryJson() ([]<a>byte</a>, <a>error</a>)</pre>
				<p>
GetBlockchainSummaryJson returns a JSON-encoded object with information about
all blockchain(s) in the ParallelChain network.
</p>
<p>
The returned object has fields:
</p>
<pre>- chains Array of Object:
  {
  + sealed_block_count int
  + chain_id string
  + machine_id string
  + network_address string
  + pcore_id string
  + tags Object:
    &gt; name string
  + last_block Object:
    &gt; block_number int
    &gt; chunkset_count int
    &gt; creation_timestamp int
    &gt; hash string
    &gt; prev_hash string
    &gt; status
  }
</pre>

				
				
				
			
				
				<h3 id="Client.GetSmartContractTransactionJson">func (*Client) <a>GetSmartContractTransactionJson</a>
					<a class="permalink" href="/references/parallelcore-client-go-sdk#Client.GetSmartContractTransactionJson">&#xb6;</a>
				</h3>
				<pre>func (client *<a href="/references/parallelcore-client-go-sdk#Client">Client</a>) GetSmartContractTransactionJson(transactionId <a>string</a>) ([]<a>byte</a>, <a>error</a>)</pre>
				<p>
GetSmartContractTransactionJson returns a JSON-encoded object containing
the DB-related (list of mutations) details of the transaction identified by transactionID.
The &#39;key&#39; and &#39;value&#39; of a transaction mutation are returned in base64 encoding.
</p>
<p>
As an example, key: base64(&#34;QWxpY2U&#34;) === &#34;Alice&#34; in human-readable form.
</p>

				
				
				
			
				
				<h3 id="Client.GetSmartContractTransactionMetadataJson">func (*Client) <a>GetSmartContractTransactionMetadataJson</a>
					<a class="permalink" href="/references/parallelcore-client-go-sdk#Client.GetSmartContractTransactionMetadataJson">&#xb6;</a>
				</h3>
				<pre>func (client *<a href="/references/parallelcore-client-go-sdk#Client">Client</a>) GetSmartContractTransactionMetadataJson(transactionId <a>string</a>) ([]<a>byte</a>, <a>error</a>)</pre>
				<p>
GetSmartContractTransactionMetadataJson returns a JSON-encoded object containing
the blockchain metadata (e.g. chain_id, block_number, timestamp) of the transaction
identified by transactionID.
</p>

				
				
				
			
				
				<h3 id="Client.GetToken">func (*Client) <a>GetToken</a>
					<a class="permalink" href="/references/parallelcore-client-go-sdk#Client.GetToken">&#xb6;</a>
				</h3>
				<pre>func (client *<a href="/references/parallelcore-client-go-sdk#Client">Client</a>) GetToken() <a>string</a></pre>
				<p>
GetToken is a getter for the private field client.token.
</p>
<p>
client.token is used for token-based authentication using the Open*ByToken group of
functions.
</p>

				
				
				
			
				
				<h3 id="Client.GetTokenExpTime">func (*Client) <a>GetTokenExpTime</a>
					<a class="permalink" href="/references/parallelcore-client-go-sdk#Client.GetTokenExpTime">&#xb6;</a>
				</h3>
				<pre>func (client *<a href="/references/parallelcore-client-go-sdk#Client">Client</a>) GetTokenExpTime() <a>int64</a></pre>
				<p>
GetTokenExpTime is a getter for the private field client.expireTimestamp.
</p>
<p>
client.expireTimestamp is used by applications to decide when to call Renew().
</p>

				
				
				
			
				
				<h3 id="Client.GetUserInfo">func (*Client) <a>GetUserInfo</a>
					<a class="permalink" href="/references/parallelcore-client-go-sdk#Client.GetUserInfo">&#xb6;</a>
				</h3>
				<pre>func (client *<a href="/references/parallelcore-client-go-sdk#Client">Client</a>) GetUserInfo(clientID <a>string</a>) (<a href="/references/parallelcore-client-go-sdk#UserFullData">UserFullData</a>, <a>error</a>)</pre>
				<p>
GetUserInfo takes in a string clientID and returns information about the specified user.
clientID could be left empty, in which case it returns information about the calling user.
It returns a populated pb.ClientFullData (see type definition).
</p>
<p>
Super-admins can GetUserInfo any
</p>

				
				
				
			
				
				<h3 id="Client.GetUserInfos">func (*Client) <a>GetUserInfos</a>
					<a class="permalink" href="/references/parallelcore-client-go-sdk#Client.GetUserInfos">&#xb6;</a>
				</h3>
				<pre>func (client *<a href="/references/parallelcore-client-go-sdk#Client">Client</a>) GetUserInfos(allDomains <a>bool</a>, domainName <a>string</a>) ([]<a href="/references/parallelcore-client-go-sdk#UserFullDataWrapper">UserFullDataWrapper</a>, <a>error</a>)</pre>
				<p>
GetUserInfos is similar to GetUserInfo, but returns []UserFullDataWrapper (see type definition),
containing information about multiple users. It takes in two parameters:
</p>
<pre>- allDomains bool
- domainName string
</pre>
<p>
There are two intended uses for GetUserInfos:
</p>
<pre>- allDomains == true &amp;&amp; domainName == &#34;&#34;: returns information about all users.
- allDomains == false &amp;&amp; domainName == &lt;domainName&gt;: returns information about users in specified domain.
</pre>
<p>
Mere domain-admins can only GetUserInfos in domains that they manage.
</p>
<p>
Permissions: Only super-admins or domain-admins
</p>

				
				
				
			
				
				<h3 id="Client.GrantAccess">func (*Client) <a>GrantAccess</a>
					<a class="permalink" href="/references/parallelcore-client-go-sdk#Client.GrantAccess">&#xb6;</a>
				</h3>
				<pre>func (client *<a href="/references/parallelcore-client-go-sdk#Client">Client</a>) GrantAccess(clientAccessDataJSON []<a>byte</a>) ([]<a>byte</a>, <a>error</a>)</pre>
				<p>
GrantAccess is used to grant users access to (i.e. have the permission to invoke) smart contracts.
It takes in a JSON-encoded object with fields:
</p>
<pre>- clientId string
- scName string
- domainName string: a domain that the client is a part of
</pre>
<p>
The calling user can only GrantAccess to smart contracts registered in domains that they manage, to
users in domains that they manage. Note that in ParallelChain, there is no concept of &#39;invoking an SC
in a domain.&#39; Invoking an SC is always invoking an SC simpliciter (apologies for the philosophical
language).
</p>
<p>
Permissions: Only super-admins and domain-admins
</p>

				
				
				
			
				
				<h3 id="Client.GrantDomainAdmin">func (*Client) <a>GrantDomainAdmin</a>
					<a class="permalink" href="/references/parallelcore-client-go-sdk#Client.GrantDomainAdmin">&#xb6;</a>
				</h3>
				<pre>func (client *<a href="/references/parallelcore-client-go-sdk#Client">Client</a>) GrantDomainAdmin(in []<a>byte</a>) ([]<a>byte</a>, <a>error</a>)</pre>
				<p>
GrantDomainAdmin takes in a JSON-encoded object with fields:
</p>
<pre>- clientId string
- clientDomainName string
</pre>
<p>
and makes the specified client an admin in the specified domain. This is only
possible if the client is in the target domain in the first place.
</p>
<p>
Super-admins can GrantDomainAdmin on all domains, domain-admins can only do so
on domains they manage.
</p>
<p>
Permissions: Only super-admins and domain-admins
</p>

				
				
				
			
				
				<h3 id="Client.IdentifiedInvoke">func (*Client) <a>IdentifiedInvoke</a>
					<a class="permalink" href="/references/parallelcore-client-go-sdk#Client.IdentifiedInvoke">&#xb6;</a>
				</h3>
				<pre>func (client *<a href="/references/parallelcore-client-go-sdk#Client">Client</a>) IdentifiedInvoke(smartContractSpec <a>string</a>, args []<a>byte</a>) ([]<a>byte</a>, <a>string</a>, <a>error</a>)</pre>
				<p>
IdentifiedInvoke is similar to Invoke but has as its 2nd returned value the SC&#39;s transaction
commit ID. If the transaction the SC produces is a read-only transaction, or if the invocation
errors, commit ID will be an empty string.
</p>

				
				
				
			
				
				<h3 id="Client.Invoke">func (*Client) <a>Invoke</a>
					<a class="permalink" href="/references/parallelcore-client-go-sdk#Client.Invoke">&#xb6;</a>
				</h3>
				<pre>func (client *<a href="/references/parallelcore-client-go-sdk#Client">Client</a>) Invoke(smartContractSpec <a>string</a>, args []<a>byte</a>) ([]<a>byte</a>, <a>error</a>)</pre>
				<p>
Invoke invokes the smart contract identified by smartContractSpec, blocking until the
smart contract invocation completes. It returns the byte slice returned by the smart
contract&#39;s Handle method.
</p>
<p>
It takes in:
</p>
<pre>- smartContractSpec string: SC identifier with the format: &lt;SC name&gt;-v&lt;SC version number&gt;
- args string: passed into the invoke SC&#39;s Handle function as its 2nd &#39;in&#39; parameter.
</pre>

				
				
				
			
				
				<h3 id="Client.ListClient">func (*Client) <a>ListClient</a>
					<a class="permalink" href="/references/parallelcore-client-go-sdk#Client.ListClient">&#xb6;</a>
				</h3>
				<pre>func (client *<a href="/references/parallelcore-client-go-sdk#Client">Client</a>) ListClient(clientID []<a>byte</a>) ([]<a>byte</a>, <a>error</a>)</pre>
				<p>
ListClient (deprecated in favor of GetUserInfo) takes in a string clientID (which could
be empty), and returns information about the specified user. It returns a JSON-encoded
object with fields:
</p>
<pre>- clientId string
- roles Array of string
- accessList Array of string
- domains Array of string
</pre>
<p>
If clientID is empty ListClient will return information about the calling user.
</p>
<p>
Super-admins can ListClient any clientID, domain-admins can ListClient any client in domains
that they manage, non-admins can ListClient only themselves.
</p>

				
				
				
			
				
				<h3 id="Client.ListClients">func (*Client) <a>ListClients</a>
					<a class="permalink" href="/references/parallelcore-client-go-sdk#Client.ListClients">&#xb6;</a>
				</h3>
				<pre>func (client *<a href="/references/parallelcore-client-go-sdk#Client">Client</a>) ListClients(query []<a>byte</a>) ([]<a>byte</a>, <a>error</a>)</pre>
				<p>
ListClients (deprecated in favor of GetUserInfos) takes in a JSON-encoded object
with keys:
</p>
<pre>- allDomains bool
- domainName string
</pre>
<p>
It returns a JSON-encoded array of objects with fields:
</p>
<pre>- clientID string
- data Object:
  + clientID string
  + roles Array of string
  + accessList Array of string
  + domains Array of string
  + managedDomains Array of string
</pre>
<p>
Domain-admins can only list users in domains that they manage.
</p>
<p>
Permissions: Only super-admins or domain-admins
</p>

				
				
				
			
				
				<h3 id="Client.ListDomain">func (*Client) <a>ListDomain</a>
					<a class="permalink" href="/references/parallelcore-client-go-sdk#Client.ListDomain">&#xb6;</a>
				</h3>
				<pre>func (client *<a href="/references/parallelcore-client-go-sdk#Client">Client</a>) ListDomain(domainName []<a>byte</a>) ([]<a>byte</a>, <a>error</a>)</pre>
				<p>
ListDomain (this function could alternatively be named GetDomainInfo) takes in a string domainName (which
could be empty), and returns information about the specified domain(s).
</p>
<p>
If domainName is non-empty, ListDomain returns an object with fields:
</p>
<pre>- clients Array of string: Clients that are part of the domain.
- admin Array of string: Admins that are part of the domain.
- smartContract Array of string: Smart contracts that are part of the domain.
</pre>
<p>
If domainName is empty, ListDomain returns an array of objects with fields:
</p>
<pre>- domainName string
- data Object:
  + clients Array of string: as above.
  + admin Array of string
  + smartContract Array of string
</pre>
<p>
ListDomain will only return information about the domains in which the user is admin.
</p>
<p>
Permissions: Only super-admins and domain-admins
</p>

				
				
				
			
				
				<h3 id="Client.ListForgetGroups">func (*Client) <a>ListForgetGroups</a>
					<a class="permalink" href="/references/parallelcore-client-go-sdk#Client.ListForgetGroups">&#xb6;</a>
				</h3>
				<pre>func (client *<a href="/references/parallelcore-client-go-sdk#Client">Client</a>) ListForgetGroups(txIds []<a>string</a>) (x []<a href="/references/parallelcore-client-go-sdk#ForgetGroup">ForgetGroup</a>, err <a>error</a>)</pre>
				<p>
ListForgetGroups returns a list of all forget groups that cover all txIds (a super-set
of txIds).
</p>
<p>
Permissions: Only super-admins.
</p>

				
				
				
			
				
				<h3 id="Client.ListInvokableSC">func (*Client) <a>ListInvokableSC</a>
					<a class="permalink" href="/references/parallelcore-client-go-sdk#Client.ListInvokableSC">&#xb6;</a>
				</h3>
				<pre>func (client *<a href="/references/parallelcore-client-go-sdk#Client">Client</a>) ListInvokableSC() ([]<a>byte</a>, <a>error</a>)</pre>
				<p>
ListInvokableSC returns a JSON-encoded array listing the smart contracts
invokable by the client.
</p>
<p>
Each item in the array is an object with fields:
</p>
<pre>- name string
- ver string
</pre>

				
				
				
			
				
				<h3 id="Client.ListLatestTransactions">func (*Client) <a>ListLatestTransactions</a>
					<a class="permalink" href="/references/parallelcore-client-go-sdk#Client.ListLatestTransactions">&#xb6;</a>
				</h3>
				<pre>func (client *<a href="/references/parallelcore-client-go-sdk#Client">Client</a>) ListLatestTransactions(count <a>int</a>) ([]<a>byte</a>, <a>error</a>)</pre>
				<p>
ListLatestTransactions returns a JSON-encoded object containing a list of the latest
count transaction IDs sorted by transaction time in descending order (latest first).
</p>

				
				
				
			
				
				<h3 id="Client.ListManagedDomains">func (*Client) <a>ListManagedDomains</a>
					<a class="permalink" href="/references/parallelcore-client-go-sdk#Client.ListManagedDomains">&#xb6;</a>
				</h3>
				<pre>func (client *<a href="/references/parallelcore-client-go-sdk#Client">Client</a>) ListManagedDomains(userID []<a>byte</a>) ([]<a>byte</a>, <a>error</a>)</pre>
				<p>
ListManagedDomains takes in a string userID and returns a JSON-encoded array of strings containing
the names of the domains in which the specified user is admin.
</p>
<p>
If the user making the call (might not be userID) is a super-admin, they can call
this function passing in any userID.
</p>
<p>
If the user making the call is a domain-admin, they need to pass their own userID as
the argument (non super-admins cannot list the managed domains of other users).
</p>
<p>
Permissions: Only super-admins and domain-admins
</p>

				
				
				
			
				
				<h3 id="Client.ListSmartContract">func (*Client) <a>ListSmartContract</a>
					<a class="permalink" href="/references/parallelcore-client-go-sdk#Client.ListSmartContract">&#xb6;</a>
				</h3>
				<pre>func (client *<a href="/references/parallelcore-client-go-sdk#Client">Client</a>) ListSmartContract(scName []<a>byte</a>) ([]<a>byte</a>, <a>error</a>)</pre>
				<p>
ListSmartContract (this function could alternatively be named GetSmartContractInfo) takes in the name of
a smart contract and returns information about the SC in a JSON-encoded object with fields:
</p>
<pre>- scName string
- scVersion string
- space string: namespace (also known as keyspace)
- checksum string
- mode string: (deprecated) either &#34;binary&#34; or &#34;package&#34;
- accessList string: comma-delimited list of clients that can invoke this SC
- domains string
</pre>
<p>
Users can only get the info of SCs in domains in which they are admin.
</p>
<p>
Permissions: Only super-admins or domain-admins
</p>

				
				
				
			
				
				<h3 id="Client.ListSmartContracts">func (*Client) <a>ListSmartContracts</a>
					<a class="permalink" href="/references/parallelcore-client-go-sdk#Client.ListSmartContracts">&#xb6;</a>
				</h3>
				<pre>func (client *<a href="/references/parallelcore-client-go-sdk#Client">Client</a>) ListSmartContracts(query []<a>byte</a>) ([]<a>byte</a>, <a>error</a>)</pre>
				<p>
ListSmartContracts takes in a JSON-encoded object with keys:
</p>
<pre>- allDomains bool
- domainName string
</pre>
<p>
It returns a JSON-encoded array of objects with information about smart contracts (see
ListSmartContract (singular) for fields returned).
</p>
<p>
If allDomains is true, then the array contains information for all SCs in the system (if user
is super-admin) or all SCs which the user is domain-admin over (if user is not domain-admin)
</p>
<p>
If allDomains is false, the array contains all smart contracts in domainName.
</p>
<p>
Permissions: Only super-admins or domain-admins
</p>

				
				
				
			
				
				<h3 id="Client.ManageApiAccess">func (*Client) <a>ManageApiAccess</a>
					<a class="permalink" href="/references/parallelcore-client-go-sdk#Client.ManageApiAccess">&#xb6;</a>
				</h3>
				<pre>func (client *<a href="/references/parallelcore-client-go-sdk#Client">Client</a>) ManageApiAccess(in []<a>byte</a>) ([]<a>byte</a>, <a>error</a>)</pre>
				<p>
ManageApiAccess ...
</p>

				
				
				
			
				
				<h3 id="Client.RegisterEventListener">func (*Client) <a>RegisterEventListener</a>
					<a class="permalink" href="/references/parallelcore-client-go-sdk#Client.RegisterEventListener">&#xb6;</a>
				</h3>
				<pre>func (client *<a href="/references/parallelcore-client-go-sdk#Client">Client</a>) RegisterEventListener(scName <a>string</a>, eventFilter <a>string</a>) (*<a href="/references/parallelcore-client-go-sdk#ListenerController">ListenerController</a>, &lt;-chan *<a href="/references/parallelcore-client-go-sdk#EventWrapper">EventWrapper</a>, <a>error</a>)</pre>
				<p>
RegisterEventListener ...
</p>

				
				
				
			
				
				<h3 id="Client.RegisterSmartContract">func (*Client) <a>RegisterSmartContract</a>
					<a class="permalink" href="/references/parallelcore-client-go-sdk#Client.RegisterSmartContract">&#xb6;</a>
				</h3>
				<pre>func (client *<a href="/references/parallelcore-client-go-sdk#Client">Client</a>) RegisterSmartContract(scRegistration []<a>byte</a>) ([]<a>byte</a>, <a>error</a>)</pre>
				<p>
RegisterSmartContract is used to install and register smart contracts for invocation
in the network, whether new or an updated version.
</p>
<p>
It takes in JSON-encoded object with keys:
</p>
<pre>- scName string: In the form: &lt;scName-scVersion&gt;
- FileContent string: Raw contents of Go build-able SC source code packaged into a .tgz
- DomainName string: The domain onto which the smart contract will be installed.
- InitArgs string: Passed into Initialize method of SC as its second argument.
</pre>
<p>
Users can only register SCs into domains in which they are admin.
</p>
<p>
Permissions: only super-admins or domain-admins
</p>

				
				
				
			
				
				<h3 id="Client.RemoveClient">func (*Client) <a>RemoveClient</a>
					<a class="permalink" href="/references/parallelcore-client-go-sdk#Client.RemoveClient">&#xb6;</a>
				</h3>
				<pre>func (client *<a href="/references/parallelcore-client-go-sdk#Client">Client</a>) RemoveClient(clientDomainDataJSON []<a>byte</a>) ([]<a>byte</a>, <a>error</a>)</pre>
				<p>
RemoveClient (deprecated in favor of DeleteUser) takes in a JSON-encoded object
with keys:
</p>
<pre>- clientId string
- clientDomainName string
</pre>
<p>
and completely removes the user identified by clientId from the network. The calling user
can only remove users in domains that they manage, and cannot remove themselves. clientDomainName
can be the name of any domain that the user is part of, and defaults to &#39;default&#39; if it is
an empty string.
</p>
<p>
Permissions: Only super-admins or domain-admins
</p>
<p>
BUG(RemoveClient): RemoveClient: non super-admins should not be allowed to remove a user from the network
entirely. Presently, &#39;mere&#39; domain-admins are allowed to do this.
</p>

				
				
				
			
				
				<h3 id="Client.Renew">func (*Client) <a>Renew</a>
					<a class="permalink" href="/references/parallelcore-client-go-sdk#Client.Renew">&#xb6;</a>
				</h3>
				<pre>func (client *<a href="/references/parallelcore-client-go-sdk#Client">Client</a>) Renew() <a>error</a></pre>
				<p>
Renew asks a ParallelCore endpoint randomly selected from client.endpointSpecs
to renew the calling client&#39;s authentication token.
</p>

				
				
				
			
				
				<h3 id="Client.RequestForget">func (*Client) <a>RequestForget</a>
					<a class="permalink" href="/references/parallelcore-client-go-sdk#Client.RequestForget">&#xb6;</a>
				</h3>
				<pre>func (client *<a href="/references/parallelcore-client-go-sdk#Client">Client</a>) RequestForget(txIds []<a>string</a>) (<a>string</a>, <a>error</a>)</pre>
				<p>
RequestForget requests deletion of all transactions specified in txIds.
The transactions specified in txIds form a &#39;forget group&#39;: either they are all deleted together,
or they are not deleted.
</p>
<p>
It returns a string, forgetRequestTxID, which can be used to approve the forget
request using ApproveForget.
</p>
<p>
Permissions: Only super-admins.
</p>

				
				
				
			
				
				<h3 id="Client.RevokeAccess">func (*Client) <a>RevokeAccess</a>
					<a class="permalink" href="/references/parallelcore-client-go-sdk#Client.RevokeAccess">&#xb6;</a>
				</h3>
				<pre>func (client *<a href="/references/parallelcore-client-go-sdk#Client">Client</a>) RevokeAccess(clientAccessDataJSON []<a>byte</a>) ([]<a>byte</a>, <a>error</a>)</pre>
				<p>
RevokeAccess is similar to GrantAccess, with the same parameters, but revokes access to the specified
scName instead of granting access.
</p>
<p>
Permissions: Only super-admins and domain-admins
</p>

				
				
				
			
				
				<h3 id="Client.RevokeDomainAdmin">func (*Client) <a>RevokeDomainAdmin</a>
					<a class="permalink" href="/references/parallelcore-client-go-sdk#Client.RevokeDomainAdmin">&#xb6;</a>
				</h3>
				<pre>func (client *<a href="/references/parallelcore-client-go-sdk#Client">Client</a>) RevokeDomainAdmin(in []<a>byte</a>) ([]<a>byte</a>, <a>error</a>)</pre>
				<p>
RevokeDomainAdmin is similar to GrantDomainAdmin, taking in the same parameters and imposing
the same constraints.
</p>
<p>
It revokes the specified client&#39;s admin privileges in the specified domain.
</p>
<p>
Permissions: Only super-admins and domain-admins
</p>

				
				
				
			
				
				<h3 id="Client.SysMan">func (*Client) <a>SysMan</a>
					<a class="permalink" href="/references/parallelcore-client-go-sdk#Client.SysMan">&#xb6;</a>
				</h3>
				<pre>func (client *<a href="/references/parallelcore-client-go-sdk#Client">Client</a>) SysMan(in []<a>byte</a>) ([]<a>byte</a>, <a>error</a>)</pre>
				<p>
SysMan (deprecated) is used to make super-admin level queries about, or changes to, the configuration of
a ParallelChain network. This includes creating, updating, removing, and listing clients,
granting access to smart contracts, requesting, approving, and commiting forget of
transactions, and so on.
</p>
<p>
All of these functionalities are now implemented in dedicated methods.
</p>

				
				
				
			
				
				<h3 id="Client.UpdateClient">func (*Client) <a>UpdateClient</a>
					<a class="permalink" href="/references/parallelcore-client-go-sdk#Client.UpdateClient">&#xb6;</a>
				</h3>
				<pre>func (client *<a href="/references/parallelcore-client-go-sdk#Client">Client</a>) UpdateClient(clientDataJSON []<a>byte</a>) ([]<a>byte</a>, <a>error</a>)</pre>
				<p>
UpdateClient (deprecated in favor of UpdateUser) is similar to CreateClient,
with the same parameters, but updates an existing user instead of creating a new one.
</p>
<p>
However, it enforces the added constraint that the calling user can only update users
in domains that they manage (super-admins do not automatically a domain-admin
of every domain).
</p>
<p>
Permissions: Only domain-admins
</p>

				
				
				
			
				
				<h3 id="Client.UpdateSelfCredential">func (*Client) <a>UpdateSelfCredential</a>
					<a class="permalink" href="/references/parallelcore-client-go-sdk#Client.UpdateSelfCredential">&#xb6;</a>
				</h3>
				<pre>func (client *<a href="/references/parallelcore-client-go-sdk#Client">Client</a>) UpdateSelfCredential(clientID <a>string</a>, credential <a>string</a>) ([]<a>byte</a>, <a>error</a>)</pre>
				<p>
UpdateSelfCredential is used to change the credential (password) of the user identified by
clientId. Users (even super-admins) can only change their own credentials. credential cannot
be an empty string.
</p>

				
				
				
			
				
				<h3 id="Client.UpdateUser">func (*Client) <a>UpdateUser</a>
					<a class="permalink" href="/references/parallelcore-client-go-sdk#Client.UpdateUser">&#xb6;</a>
				</h3>
				<pre>func (client *<a href="/references/parallelcore-client-go-sdk#Client">Client</a>) UpdateUser(userID <a>string</a>, password <a>string</a>, roles []<a>string</a>, domains []<a>string</a>) (<a>string</a>, <a>error</a>)</pre>
				<p>
UpdateUser is similar to CreateUser, with the same parameters, but updates an existing user instead
of creating a new one.
</p>
<p>
However, it enforces the added constraint that the calling user can only update
user in domains that they manage (super-admins do not automatically become a domain-admin
of every domain).
</p>
<p>
Permissions: only domain-admins
</p>

				
				
				
			
		
			
			
			<h2 id="CommitForgetParams">type <a>CommitForgetParams</a>
				<a class="permalink" href="/references/parallelcore-client-go-sdk#CommitForgetParams">&#xb6;</a>
			</h2>
			
			<pre>type CommitForgetParams struct {
<span id="CommitForgetParams.RequestTxId"></span>    RequestTxId   <a>string</a>   \`json:&#34;request_tx_id&#34;\`
<span id="CommitForgetParams.ApprovalTxIds"></span>    ApprovalTxIds []<a>string</a> \`json:&#34;approval_tx_ids&#34;\`
}</pre>

			

			

			
			
			

			

			
		
			
			
			<h2 id="EventWrapper">type <a>EventWrapper</a>
				<a class="permalink" href="/references/parallelcore-client-go-sdk#EventWrapper">&#xb6;</a>
			</h2>
			
			<pre>type EventWrapper struct {
<span id="EventWrapper.ScEvent"></span>    ScEvent *<a href="/references/parallelcore-client-go-sdk#ScEvent">ScEvent</a>
<span id="EventWrapper.Error"></span>    Error   <a>error</a>
}</pre>

			

			

			
			
			

			

			
		
			
			
			<h2 id="ForgetGroup">type <a>ForgetGroup</a>
				<a class="permalink" href="/references/parallelcore-client-go-sdk#ForgetGroup">&#xb6;</a>
			</h2>
			
			<pre>type ForgetGroup struct {
<span id="ForgetGroup.TxIds"></span>    TxIds []<a>string</a> \`json:&#34;tx_ids&#34;\`
}</pre>

			

			

			
			
			

			

			
		
			
			
			<h2 id="ForgetReport">type <a>ForgetReport</a>
				<a class="permalink" href="/references/parallelcore-client-go-sdk#ForgetReport">&#xb6;</a>
			</h2>
			
			<pre>type ForgetReport struct {
<span id="ForgetReport.Deleted"></span>    Deleted        []<a>string</a> \`json:&#34;deleted&#34;\`
<span id="ForgetReport.AlreadyDeleted"></span>    AlreadyDeleted []<a>string</a> \`json:&#34;already_deleted&#34;\`
<span id="ForgetReport.NotFound"></span>    NotFound       []<a>string</a> \`json:&#34;not_found&#34;\`
<span id="ForgetReport.CommitTxId"></span>    CommitTxId     <a>string</a>   \`json:&#34;commit_tx_id&#34;\`
}</pre>

			

			

			
			
			

			

			
		
			
			
			<h2 id="GetSmartContractTransactionOptions">type <a>GetSmartContractTransactionOptions</a>
				<a class="permalink" href="/references/parallelcore-client-go-sdk#GetSmartContractTransactionOptions">&#xb6;</a>
			</h2>
			<p>
types of api access control payloads
</p>

			<pre>type GetSmartContractTransactionOptions struct {
<span id="GetSmartContractTransactionOptions.ClientId"></span>    ClientId      <a>string</a> \`json:&#34;client-id&#34;\`
<span id="GetSmartContractTransactionOptions.SmartContract"></span>    SmartContract <a>string</a> \`json:&#34;smart-contract&#34;\`
}</pre>

			

			

			
			
			

			

			
		
			
			
			<h2 id="InfoListData">type <a>InfoListData</a>
				<a class="permalink" href="/references/parallelcore-client-go-sdk#InfoListData">&#xb6;</a>
			</h2>
			
			<pre>type InfoListData struct {
<span id="InfoListData.AllDomains"></span>    AllDomains <a>bool</a>   \`json:&#34;allDomains&#34;\`
<span id="InfoListData.DomainName"></span>    DomainName <a>string</a> \`json:&#34;domainName&#34;\`
}</pre>

			

			

			
			
			

			

			
		
			
			
			<h2 id="ListenerController">type <a>ListenerController</a>
				<a class="permalink" href="/references/parallelcore-client-go-sdk#ListenerController">&#xb6;</a>
			</h2>
			
			<pre>type ListenerController struct {
    <span class="comment">// contains filtered or unexported fields</span>
}</pre>

			

			

			
			
			

			

			
				
				<h3 id="ListenerController.Close">func (ListenerController) <a>Close</a>
					<a class="permalink" href="/references/parallelcore-client-go-sdk#ListenerController.Close">&#xb6;</a>
				</h3>
				<pre>func (cc <a href="/references/parallelcore-client-go-sdk#ListenerController">ListenerController</a>) Close()</pre>
				
				
				
				
			
		
			
			
			<h2 id="RegisterEventListenerRequest">type <a>RegisterEventListenerRequest</a>
				<a class="permalink" href="/references/parallelcore-client-go-sdk#RegisterEventListenerRequest">&#xb6;</a>
			</h2>
			
			<pre>type RegisterEventListenerRequest struct {
<span id="RegisterEventListenerRequest.ScName"></span>    ScName      <a>string</a> \`json:&#34;scName&#34;\`
<span id="RegisterEventListenerRequest.EventFilter"></span>    EventFilter <a>string</a> \`json:&#34;eventFilter&#34;\`
}</pre>

			

			

			
			
			

			

			
		
			
			
			<h2 id="RequestForgetParams">type <a>RequestForgetParams</a>
				<a class="permalink" href="/references/parallelcore-client-go-sdk#RequestForgetParams">&#xb6;</a>
			</h2>
			
			<pre>type RequestForgetParams struct {
<span id="RequestForgetParams.TxIds"></span>    TxIds []<a>string</a> \`json:&#34;tx_ids&#34;\`
}</pre>

			

			

			
			
			

			

			
		
			
			
			<h2 id="ScEvent">type <a>ScEvent</a>
				<a class="permalink" href="/references/parallelcore-client-go-sdk#ScEvent">&#xb6;</a>
			</h2>
			
			<pre>type ScEvent struct {
<span id="ScEvent.TxId"></span>    TxId      <a>string</a> \`json:&#34;txId&#34;\`
<span id="ScEvent.ScName"></span>    ScName    <a>string</a> \`json:&#34;scName&#34;\`
<span id="ScEvent.EventName"></span>    EventName <a>string</a> \`json:&#34;eventName&#34;\`
<span id="ScEvent.Payload"></span>    Payload   <a>string</a> \`json:&#34;payload&#34;\`
}</pre>

			

			

			
			
			

			

			
		
			
			
			<h2 id="SmartContractData">type <a>SmartContractData</a>
				<a class="permalink" href="/references/parallelcore-client-go-sdk#SmartContractData">&#xb6;</a>
			</h2>
			
			<pre>type SmartContractData struct {
<span id="SmartContractData.Name"></span>    Name        <a>string</a> \`json:&#34;scName&#34;\`
<span id="SmartContractData.FileContent"></span>    FileContent []<a>byte</a> \`json:&#34;file-content&#34;\`
<span id="SmartContractData.DomainName"></span>    DomainName  <a>string</a> \`json:&#34;domainName&#34;\`
<span id="SmartContractData.InitArgs"></span>    InitArgs    <a>string</a> \`json:&#34;init-args&#34;\`
}</pre>

			

			

			
			
			

			

			
		
			
			
			<h2 id="SysManData">type <a>SysManData</a>
				<a class="permalink" href="/references/parallelcore-client-go-sdk#SysManData">&#xb6;</a>
			</h2>
			
			<pre>type SysManData struct {
<span id="SysManData.Action"></span>    Action <a>string</a> \`json:&#34;action&#34;\`
<span id="SysManData.Data"></span>    Data   []<a>byte</a> \`json:&#34;data&#34;\`
}</pre>

			

			

			
			
			

			

			
		
			
			
			<h2 id="UserAccessData">type <a>UserAccessData</a>
				<a class="permalink" href="/references/parallelcore-client-go-sdk#UserAccessData">&#xb6;</a>
			</h2>
			
			<pre>type UserAccessData struct {
<span id="UserAccessData.ID"></span>    ID                <a>string</a> \`json:&#34;clientId&#34;\`
<span id="UserAccessData.SmartContractName"></span>    SmartContractName <a>string</a> \`json:&#34;scName&#34;\`
<span id="UserAccessData.DomainName"></span>    DomainName        <a>string</a> \`json:&#34;domainName&#34;\`
}</pre>

			

			

			
			
			

			

			
		
			
			
			<h2 id="UserData">type <a>UserData</a>
				<a class="permalink" href="/references/parallelcore-client-go-sdk#UserData">&#xb6;</a>
			</h2>
			
			<pre>type UserData struct {
<span id="UserData.ID"></span>    ID         <a>string</a> \`json:&#34;clientId&#34;\`
<span id="UserData.Credential"></span>    Credential <a>string</a> \`json:&#34;clientCredential&#34;\`
<span id="UserData.Roles"></span>    Roles      <a>string</a> \`json:&#34;clientRoles&#34;\`
<span id="UserData.DomainName"></span>    DomainName <a>string</a> \`json:&#34;clientDomainName&#34;\`
}</pre>

			

			

			
			
			

			

			
		
			
			
			<h2 id="UserDomainData">type <a>UserDomainData</a>
				<a class="permalink" href="/references/parallelcore-client-go-sdk#UserDomainData">&#xb6;</a>
			</h2>
			
			<pre>type UserDomainData struct {
<span id="UserDomainData.ID"></span>    ID         <a>string</a> \`json:&#34;clientId&#34;\`
<span id="UserDomainData.DomainName"></span>    DomainName <a>string</a> \`json:&#34;clientDomainName&#34;\`
}</pre>

			

			

			
			
			

			

			
		
			
			
			<h2 id="UserFullData">type <a>UserFullData</a>
				<a class="permalink" href="/references/parallelcore-client-go-sdk#UserFullData">&#xb6;</a>
			</h2>
			
			<pre>type UserFullData struct {
<span id="UserFullData.ID"></span>    ID             <a>string</a>   \`json:&#34;clientId&#34;\`
<span id="UserFullData.Roles"></span>    Roles          []<a>string</a> \`json:&#34;roles&#34;\`
<span id="UserFullData.AccessList"></span>    AccessList     []<a>string</a> \`json:&#34;accessList&#34;\`
<span id="UserFullData.Domains"></span>    Domains        []<a>string</a> \`json:&#34;domains&#34;\`
<span id="UserFullData.ManagedDomains"></span>    ManagedDomains []<a>string</a> \`json:&#34;managedDomains&#34;\`
}</pre>

			

			

			
			
			

			

			
		
			
			
			<h2 id="UserFullDataWrapper">type <a>UserFullDataWrapper</a>
				<a class="permalink" href="/references/parallelcore-client-go-sdk#UserFullDataWrapper">&#xb6;</a>
			</h2>
			
			<pre>type UserFullDataWrapper struct {
<span id="UserFullDataWrapper.ID"></span>    ID   <a>string</a>       \`json:&#34;clientId&#34;\`
<span id="UserFullDataWrapper.Data"></span>    Data <a href="/references/parallelcore-client-go-sdk#UserFullData">UserFullData</a> \`json:&#34;data&#34;\`
}</pre>

			

			

			
			
			

			

			
		
			
			
			<h2 id="UserManData">type <a>UserManData</a>
				<a class="permalink" href="/references/parallelcore-client-go-sdk#UserManData">&#xb6;</a>
			</h2>
			
			<pre>type UserManData struct {
<span id="UserManData.Action"></span>    Action <a>string</a> \`json:&#34;action&#34;\`
<span id="UserManData.Data"></span>    Data   []<a>byte</a> \`json:&#34;data&#34;\`
}</pre>

			

			

			
			
			

			

			
		
	

	
		
			<h2 id="pkg-note-BUG">Bugs</h2>
			<ul style="list-style: none; padding: 0;">
			
			<li><a style="float: left;">&#x261e;</a> <p>
RemoveClient: non super-admins should not be allowed to remove a user from the network
entirely. Presently, &#39;mere&#39; domain-admins are allowed to do this.
</p>
</li>
			
			<li><a style="float: left;">&#x261e;</a> <p>
DeleteUser: non super-admins should not be allowed to remove a user from the network
entirely. Presently, &#39;mere&#39; domain-admins are allowed to do this.
</p>
</li>
			
			<li><a style="float: left;">&#x261e;</a> <p>
RequireTransportSecurity: is trivial in the current release.
</p>
</li>
			
			</ul>
		
	





	
	
		<h2 id="pkg-subdirectories">Subdirectories</h2>
	
	


	<div class="pkg-dir">
		<table>
			<tr>
				<th class="pkg-name">Name</th>
				<th class="pkg-synopsis">Synopsis</th>
			</tr>

			
			<tr>
				<td colspan="2"><a>..</a></td>
			</tr>
			

			
				
					<tr>
						<td class="pkg-name" style="padding-left: 0px;">
							<a>engine_client_proto</a>
						</td>
						<td class="pkg-synopsis">
							Package engine_client_proto is a generated protocol buffer package.
						</td>
					</tr>
				
			
		</table>
	</div>

</div><!-- .container -->
</div><!-- #page -->
`;

export default function GodocParallelCoreClientSDK() {
  const classes = useStyles();

  return (
    <>
      <MetaTags>
        <link type="text/css" rel="stylesheet" href="/godoc-styles.css" />
        <link rel="stylesheet" href="/jquery.treeview.css" />
      </MetaTags>
      <div
        className={classes.godocWrapper}
        dangerouslySetInnerHTML={{ __html: innerHTML }}
      />
    </>
  );
}
