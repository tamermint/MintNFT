async function run() {
  const { create } = await import("ipfs-http-client");
  const ipfs = create();

  // we added three attributes, add as many as you want!
  const metadata = {
    path: "/",
    content: JSON.stringify({
      name: "My First NFT",
      attributes: [
        {
          trait_type: "Punk",
          value: "004",
        },
        {
          trait_type: "Color",
          value: "green",
        },
        {
          trait_type: "Hair",
          value: "Mauhawk",
        },
      ],
      // update the IPFS CID to be your image CID
      image:
        "https://ipfs.io/ipfs/QmUmDqqgY5CfBJyyVhhf9QttzKJ673dFhD1X7EsH7fnmnB",
      description: "Green Punk!",
    }),
  };

  const result = await ipfs.add(metadata);
  console.log(result);

  process.exit(0);
}

run();
