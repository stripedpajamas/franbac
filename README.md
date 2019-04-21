# franbac 🥓

helps encode/decode strings that use two different characters to represent A's and B's. more info about the bacon cipher [here](https://en.wikipedia.org/wiki/Bacon%27s_cipher)

it will try to decode with letter 1 = A and letter 2 = A. if one of those decoded texts results in an invalid plaintext, it will discard it. it will try with the default alphabet and the alternate alphabet (both are in that wikipedia page).

## install + use
easist to use `npx` to run on-demand

### decode
text: `franbac decode <ciphertext>`

file: `franbac file decode <filename>`

```bash
$ npx franbac decode aaaaaaaaabaaaba
ABC
```

decode emojis
```bash
$ npx franbac decode 🌸🌿🌸🌿🌿🌿🌸🌿🌿🌸🌿🌸🌸🌸🌿🌿🌸🌸🌿🌿🌸🌿🌿🌸🌸🌸🌸🌸🌸🌸🌸🌿🌿🌸🌸🌸🌸🌸🌿🌿🌿🌸🌸🌸🌿🌿🌸🌸🌿🌸🌸🌸🌸🌸🌸🌿🌸🌸🌸🌸🌿🌸🌸🌸🌿
MYSVNANDSTARS
```

### encode
text: `franbac encode <a> <b> <plaintext>`

file: `franbac file encode <a> <b> <filename>`

```bash
$ npx franbac encode t s hello world
ttsssttstttststtststtsstsststttsstsstttttststtttss
```

encode emojis
```bash
$ npx franbac encode 🥓 🎉 hello world
🥓🥓🎉🎉🎉🥓🥓🎉🥓🥓🥓🎉🥓🎉🥓🥓🎉🥓🎉🥓🥓🎉🎉🥓🎉🎉🥓🎉🥓🥓🥓🎉🎉🥓🎉🎉🥓🥓🥓🥓🥓🎉🥓🎉🥓🥓🥓🥓🎉🎉
```

### files
encode and decode file
```bash
$ echo "hello world" > helloworld.txt
$ npx franbac file encode 6 9 helloworld.txt > helloworld.enc
$ cat helloworld.enc
66999669666969669696699699696669969966666969666699
$ npx franbac file decode helloworld.enc
HELLOWORLD
```

## roadmap
- [x] support decoding
- [x] support encoding given A and B substitutions
- [x] support encoding/decoding a file

## license
MIT
