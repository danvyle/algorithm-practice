// ---------problem------------
// Signal Lock
// Programming challenge description:
// Many file formats have information that extends beyond the main payload. For example, an image file may contain extensive metadata that is not part of the visually-rendered graphic.

// Write a program that will seek a blob of information for a header and footer, extracting the payload in between them.

// Try to do this efficiently.

// Input:
// The first line of input will have the payload's header and footer separated by a pipe character "|". Each will be a raw, UTF-8 byte sequence.

// All subsequent lines of input will be a wrapped character array that is not human-readable. This will contain the payload you seek. There will be only one payload per blob.

// Output:
// The payload characters written in a single line of output. No header or footer should be included.
//expected output: SEE SPOT RUN



// --------solution------------


//can't remember if the other test cases had capitalized HEADER|FOOTER, but if so
// I would need to set them to uppercase/lowercase before replacing

let input = "HEADER|FOOTER HAV VM DIICBSYF . GCJBVJHFXYJGC BVD HFDY UIUS BDHD JHD FGIUDTYBLDHEADER SEE SPOT RUN FOOTER8TYS $HSUHJC HUFDU YSGF"

function findString(input) {
    //   // we'll need to delete header|footer off the input
      const replacedHF = input.replace('HEADER|FOOTER', 'no need');
      const newArray = replacedHF.split(" ");
    
      let headerIndex = 0;
      let footerIndex = 0;
    
      //iterate through the rest of the array to find the index of header and footer
      for(let i = 0; i < newArray.length; i++) {
        let upperCasedHeader = newArray[i].toUpperCase();
         
        if (upperCasedHeader.includes("HEADER")) {
            if (upperCasedHeader.length != footerIndex) {
            //don't forget to lap off anything after header
            let newString = upperCasedHeader.split("HEADER");
            headerIndex = i;
           }
          
        }
        
        let upperCasedFooter = newArray[i].toUpperCase();
        if (upperCasedFooter.includes("FOOTER")) {
          if (upperCasedFooter.length != footerIndex) {
            //don't forget to lap off anything before footer
            let newFootString = upperCasedFooter.split("FOOTER");
            footerIndex = i;
           }
        }
      }
    //   console.log(headerIndex, footerIndex);
        // we can then slice the array to get the blob we need and join it to produce a string.
      const payload = (newArray.slice(headerIndex + 1, footerIndex)).join(" ");
      console.log(payload);
    }
    
    console.log(findString(input));
    
    
     