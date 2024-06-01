/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const Nfts =[]
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (Id, Name ,Phone_no, Address) {
    const Nft ={
        "ID" :Id,
        "Name" : Name,
        "Phone_no": Phone_no,
        "Address": Address
    }
    Nfts.push(Nft);
    console.log("MintNFT:" + Id);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
  for(let i=0; i< Nfts.length; i++) {
      console.log("ID:" +(i+1));
      console.log("Name:" +Nfts[i].Name);
      console.log("Phone no:" +Nfts[i].Phone_no);
      console.log("Address:" + Nfts[i].Address);
  }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
  console.log("NFT length : " + Nfts.length);
}

// call your functions below this line
mintNFT("101","Anuradha","985769345", "Gujrat");
mintNFT("102","Happy","675880432", "Chattisgarh");
mintNFT("103","Santi","123789456", "Pune");
mintNFT("104","Brijesh","00987652", "Patna");
listNFTs();
getTotalSupply();


