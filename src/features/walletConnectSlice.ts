import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import WalletConnect from "@walletconnect/client";
import QRCodeModal from "algorand-walletconnect-qrcode-modal";
import { apiGetAccountAssets, ChainType } from "../helpers/api";
import { IAssetData } from "../helpers/types";

interface WalletConnectState {
  chain: ChainType,
  accounts: string[],
  address: string,
  assets: IAssetData[],
  connected: boolean,
  connector: WalletConnect | null
}

const initialState = {
  accounts: [],
  address: "",
  assets: [],
  connected: false,
  connector: null,
  chain: ChainType.TestNet
} as WalletConnectState;

export const getAccountAssets = createAsyncThunk("walletConnect/getAccountAssets", async (accountData: {chain: ChainType, address: string}) => {
  const { chain, address } = accountData;
  const response = apiGetAccountAssets(chain, address)
  return response;
})

export const walletConnectSlice = createSlice({
    name: 'walletConnect',
    initialState,
    reducers: {
      switchChain(state, action) {
        state.chain = action.payload
      },
      reset: state => {
        state.accounts = [];
        state.address = "";
        state.assets = [];
        state.connected = false;
        state.connector = null;
        console.log("reset state", state)
      },
      walletConnectInit: state => {
        // Create a connector
        state.connector = new WalletConnect({
          bridge: "https://bridge.walletconnect.org",
          qrcodeModal: QRCodeModal,
        });
      },
      setConnected: (state, action) => {
        state.connected = action.payload;
      },
      onConnect: (state, action) =>  {
        const { accounts } = action.payload.params[0];
        state.accounts = accounts;
        state.address = accounts[0];
      },
      onSessionUpdate: (state, action) => {
        state.accounts = action.payload;
        state.address = action.payload[0];
      },
      setAccountAssets: (state, action) => {
        state.assets = action.payload;
      },
      killSession: state => {
        if (state.connected) {
          (state.connector as WalletConnect).killSession();
        }
      }
    },
    extraReducers(builder) {
      builder.addCase(getAccountAssets.fulfilled, (state, action) => {
        state.assets = action.payload;
      })
    }
});

export const selectChain = (state: any) => state.walletConnect && state.walletConnect.chain;
export const selectConnector = (state: any) => state.walletConnect && state.walletConnect.connector;
export const selectAssets = (state: any) => state.walletConnect && state.walletConnect.assets;
export const selectAddress = (state: any) => state.walletConnect && state.walletConnect.address;

export const {
  reset,
  walletConnectInit,
  setConnected,
  onConnect,
  onSessionUpdate,
  killSession
} = walletConnectSlice.actions;

export default walletConnectSlice.reducer;