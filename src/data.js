/**
 * Data structure is defined as below
 * 
 * data = // all datas
 *    sections: [ // each object represents all data for a section
 *      name: string
 *      introductions: [string] // used to give an introduction by the character
 *      pages: [ // each object represents all data for a page
 *          description: string
 *          items: [ // each object represents all data for an item
 *              narration: string
 *              response: string
 *              vislatingRules: boolean    
 *  */ 




const data = {
  sections: [ // start of section arrays
    {
      name: "Section1",
      introductions: [ // intro
        'Hello! Welcom to the section 1 of Interactive ToS test. I am your asistant to provide you some important information about this test, and will guide you through the whole section.',
        'Recently, a lot of officers has reported many users of our product posted inappropriate content. You will be acting as a detector who is trying to find the evidences that users violating the rules with my help. I hope that in this way, you could better understand how we provide good user experience to everyone by applying those rules.',
        'The following section is adapted from The Twitter Rules: "https://help.twitter.com/en/rules-and-policies/twitter-rules".',
      ], 
      pages: [ // start of pages arrays
        {
          description: "A: please find some objects that reflect issue A",
          items: [ // start of items array
            {
              narration: "This item looks strange",
              response: "Yes ur right",
              violatingRules: true
            },
            {
              narration: "This item looks good",
              response: "wrong",
              violatingRules: false
            },
            {
              narration: "This item looks perfect",
              response: "wrong",
              violatingRules: false
            },
            {
              narration: "This item looks perfect",
              response: "wrong",
              violatingRules: false
            },
          ], // end of items array
        },
        {
          description: "B: please find some objects that reflect issue B",
          items: [ // start of items array
            {
              narration: "This item looks good",
              response: "no you are wrong",
              violatingRules: false
            },
            {
              narration: "This item looks good",
              response: "Yes ur right",
              violatingRules: true
            },
            {
              narration: "This item looks strange",
              response: "wrong",
              violatingRules: false
            },
            {
              narration: "This item looks strange",
              response: "wrong",
              violatingRules: false
            }
          ], // end of items array
        },
        {
          description: "C: please find some objects that reflect issue C",
          items: [  // start of items array
            {
              narration: "This item looks strange",
              response: "Yes ur right",
              violatingRules: true
            },
            {
              narration: "This item looks good",
              response: "no you are wrong",
              violatingRules: false
            },
            {
              narration: "This item looks good",
              response: "no you are wrong",
              violatingRules: false
            },
            {
              narration: "This item looks good",
              response: "wrong answer",
              violatingRules: false
            },
          ], // end of items array
        },
      ], // end of pages array
    }, 
    {},
    {},
    {},
  ], // end of sections array
};

export default data;