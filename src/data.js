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
 *          detailToS: [string] // array of strings for ToS details
 *  */ 




const data = {
  sections: [ // start of section arrays
    {
      name: "Section1",
      introductions: [ // intro
        'Hello! Welcom to the section 1 of Interactive ToS test. I am your personal asistant, and I will provide you some important information and guild you through this test.',
        'Recently, a lot of officers has reported many users of our product posted inappropriate content. You will be acting as a detector who is trying to find the evidences that users violating the rules with my help.',
        'I hope that in this way, you could better understand how we provide good user experience to everyone by applying those rules. The following section is adapted from The Twitter Rules: "https://help.twitter.com/en/rules-and-policies/twitter-rules".',
      ], 
      pages: [ // start of pages arrays
        {
          description: "Our company's purpose is to serve the public conversation. Violence, harassment and other similar types of behavior discourage people from expressing themselves, and ultimately diminish the value of global public conversation. Our rules are to ensure all people can participate in the public conversation freely and safely. Please find the evidence that the user violated this rule.",
          items: [ // start of items array
            {
              narration: "Hmmm... This post seems to be the normal feelings under covid restrictions.",
              response: "This post does not violate the rule.",
              violatingRules: false,
            },
            {
              narration: "It seems that Benny posted violent threats, does it violate the rule? ",
              response: "Yes, you are right. Users may not threaten violence against an individual or a group of people. We also prohibit the glorification of violence.",
              violatingRules: true
            },
            {
              narration: "Maybe there's a better choice?",
              response: "This post does not violate the rule.",
              violatingRules: false
            },
          ], // end of items array
          detailToS: [
            "Healthy conversation is only possible when people feel safe from abuse and don’t resort to using violent language. For this reason, we have a policy against threatening violence on Twitter. We define violent threats as statements of an intent to kill or inflict serious physical harm on a specific person or group of people.", 
            "Under this policy, you can’t state an intention to inflict violence on a specific person or group of people. We define intent to include statements like \“I will\”, \“I’m going to”, or \“I plan to\”, as well as conditional statements like If you do X, I will\”. Violations of this policy include, but are not limited to:",
            "threatening to kill someone; \n threatening to sexually assault someone; \n threatening to seriously hurt someone and/or commit a other violent act that could lead to someone’s death or serious physical injury; and \n asking for or offering a financial reward in exchange for inflicting violence on a specific person or group of people.",
          ],
        },
        {
          description: "There is no place here for violent organizations, including terrorist organizations, violent extremist groups, or individuals who affiliate with and promote their illicit activities. The violence that these groups engage in and/or promote jeopardizes the physical safety and well-being of those targeted. Please find the evidence that the user violated this rule.",
          items: [ // start of items array
            {
              narration: "This post seems to be posted by a terrorism organization, does it violate the rule?",
              response: "Yes, you are right. There is no place here for violent organizations, including terrorist organizations, violent extremist groups, or individuals who affiliate with and promote their illicit activities. The violence that these groups engage in and/or promote jeopardizes the physical safety and well-being of those targeted. ",
              violatingRules: true
            },
            {
              narration: "haha it's funny right? But does it really violate the rule?",
              response: "This post does not violate the rule.",
              violatingRules: false,
            },
            {
              narration: "hey, you too!",
              response: "This post does not violate the rule.",
              violatingRules: false,
            },
          ], // end of items array
          detailToS: [
            "There is no place here for violent organizations, including terrorist organizations, violent extremist groups, or individuals who affiliate with and promote their illicit activities. The violence that these groups engage in and/or promote jeopardizes the physical safety and well-being of those targeted. Our assessments under this policy are informed by national and international terrorism designations, as well as our violent extremist group and violent organizations criteria.", 
            "You may not threaten or promote terrorism or violent extremism. Violent extremist groups are those that meet all of the below criteria:",
            "identify through their stated purpose, publications, or actions as an extremist group; \n have engaged in, or currently engage in, violence and/or the promotion of violence as a means to further their cause; and \n target civilians in their acts and/or promotion of violence.",
            "Other violent organizations are those that meet all of the below criteria:",
            "a collection of individuals with a shared purpose; and \n have systematically targeted civilians with violence. "
          ],
        },
        {
          description: "We have zero tolerance towards any material that features or promotes child sexual exploitation, one of the most serious violations of the rules. This may include media, text, illustrated, or computer-generated images. Regardless of the intent, viewing, sharing, or linking to child sexual exploitation material contributes to the re-victimization of the depicted children. Please find the evidence that the user violated this rule.",
          items: [  // start of items array
            {
              narration: "This post shouldn't be allowed! We have a zero-tolerance child sexual exploitation policy here, and this post definitely violets the rule!",
              response: "Yes, you are right. We have zero tolerance towards any material that features or promotes child sexual exploitation, one of the most serious violations of the rules. This may include media, text, illustrated, or computer-generated images. Regardless of the intent, viewing, sharing, or linking to child sexual exploitation material contributes to the re-victimization of the depicted children. This also applies to content that may further contribute to victimization of children through the promotion or glorification of child sexual exploitation. For the purposes of this policy, a minor is any person under the age of 18. ",
              violatingRules: true
            },
            {
              narration: "This seems to be a good wish for the holiday. Does it voilets the rule?",
              response: "This post does not violate the rule.",
              violatingRules: false
            },
            {
              narration: "This post looks good, does it voilate the rule?",
              response: "This post does not violate the rule.",
              violatingRules: false
            },
          ], // end of items array
          detailToS: [
            "We have zero tolerance towards any material that features or promotes child sexual exploitation, one of the most serious violations of the rules. This may include media, text, illustrated, or computer-generated images. Regardless of the intent, viewing, sharing, or linking to child sexual exploitation material contributes to the re-victimization of the depicted children. This also applies to content that may further contribute to victimization of children through the promotion or glorification of child sexual exploitation. For the purposes of this policy, a minor is any person under the age of 18.",
            "Any content that depicts or promotes child sexual exploitation including, but not limited to: ",
            "visual depictions of a child engaging in sexually explicit or sexually suggestive acts; \n illustrated, computer-generated or other forms of realistic depictions of a human child in a sexually explicit context, or engaging in sexually explicit acts; \n sexualized commentaries about or directed at a known or unknown minor; and \n links to third-party sites that host child sexual exploitation material.",
            "The following behaviors are also not permitted: ",
            "sharing fantasies about or promoting engagement in child sexual exploitation; \n expressing a desire to obtain materials that feature child sexual exploitation; \n recruiting, advertising or expressing an interest in a commercial sex act involving a child, or in harboring and/or transporting a child for sexual purposes; \n sending sexually explicit media to a child; \n engaging or trying to engage a child in a sexually explicit conversation; \n trying to obtain sexually explicit media from a child or trying to engage a child in sexual activity  through blackmail or other incentives; \n identifying alleged victims of childhood sexual exploitation by name or image; and \n promoting or normalizing sexual attraction to minors as a form of identity or sexual orientation. "
          ],
        },
      ], // end of pages array
    }, 
    {},
    {},
    {},
  ], // end of sections array
};

export default data;