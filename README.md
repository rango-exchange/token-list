# Rango Token List

Rango Exchange offers support for a wide array of tokens, exceeding 10,000 in number. These tokens are drawn from popular token lists like CoinGecko, as well as protocol-specific token lists such as 1inch tokens or Wormhole token list.

---

<details open>
<summary><h2 style='display: inline; font-size: 24px'>How to list your token in Rango?</h2></summary>

In order to include your token on Rango Exchange as a custom token, you are required to initiate a pull request (PR) to this repository. Please adhere to the following steps for the submission process:

1. Fork this repo to your own github account.

2. Clone fork and create new branch:

   ```shell
   git clone git@github.com:YOUR_ACCOUNT/rango-token-list.git
   cd rango-token-list
   git branch <branch_name>
   git checkout <branch_name>
   ```

3. Create a directory within `tokens/custom/` using your token's name. Inside this directory, include a 400x400 SVG/PNG icon, along with the token's manifest.

4. Submit the Pull Request. Within the _PR description_, kindly provide an explanation regarding **the DEXes/Bridges that your token is supported by**, considering Rango's integration. You could find list of all supported protocols [here](https://docs.rango.exchange/integrations).

</details>

---

<details>
<summary><h2 style='display: inline; font-size: 24px'>How to add a token list to Rango?</h2></summary>

You need to add this token list to `all-token-lists.json` file.

1. Fork this repo to your own github account

2. Clone fork and create new branch

   ```shell
   git clone git@github.com:YOUR_ACCOUNT/rango-token-list.git
   cd rango-token-list
   git branch <branch_name>
   git checkout <branch_name>
   ```

3. Add your suggested token list at the end of `all-token-lists.json` file.

4. Submit the Pull Request. Within the _PR description_, kindly provide an explanation regarding **the DEXes/Bridges that your token is supported by**, considering Rango's integration. You could find list of all supported protocols [here](https://docs.rango.exchange/integrations).

</details>
