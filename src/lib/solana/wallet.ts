"use client";

import { Connection, PublicKey, Transaction, SystemProgram, LAMPORTS_PER_SOL } from '@solana/web3.js';
import { createMint, getOrCreateAssociatedTokenAccount, mintTo, TOKEN_PROGRAM_ID } from '@solana/spl-token';

const SOLANA_RPC_URL = process.env.NEXT_PUBLIC_SOLANA_RPC_URL || 'https://api.devnet.solana.com';

export class SolanaService {
  private connection: Connection;

  constructor() {
    this.connection = new Connection(SOLANA_RPC_URL, 'confirmed');
  }

  async createToken(
    payer: PublicKey,
    name: string,
    symbol: string,
    supply: number
  ): Promise<string> {
    try {
      // Create mint account
      const mint = await createMint(
        this.connection,
        payer as any, // Wallet adapter will handle signing
        payer,
        null,
        9 // 9 decimals
      );

      // Get or create associated token account
      const tokenAccount = await getOrCreateAssociatedTokenAccount(
        this.connection,
        payer as any,
        mint,
        payer
      );

      // Mint tokens
      await mintTo(
        this.connection,
        payer as any,
        mint,
        tokenAccount.address,
        payer,
        supply * LAMPORTS_PER_SOL
      );

      return mint.toBase58();
    } catch (error) {
      console.error('Error creating token:', error);
      throw error;
    }
  }

  async getBalance(publicKey: PublicKey): Promise<number> {
    try {
      const balance = await this.connection.getBalance(publicKey);
      return balance / LAMPORTS_PER_SOL;
    } catch (error) {
      console.error('Error getting balance:', error);
      return 0;
    }
  }

  async sendTransaction(transaction: Transaction, signers: any[]): Promise<string> {
    try {
      const signature = await this.connection.sendTransaction(transaction, signers);
      await this.connection.confirmTransaction(signature);
      return signature;
    } catch (error) {
      console.error('Error sending transaction:', error);
      throw error;
    }
  }
}