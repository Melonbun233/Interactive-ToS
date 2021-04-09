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
      name: "Section1: Safety",
      introductions: [ // intro
        'Hello! Welcom to the section 1 of Interactive ToS test. I am your personal asistant, and I will provide you some important information and guild you through this test.',
        'This section is dedicated to the safety rules that users should all agree to before they use the software. Our purpose is to serve the public conversation. Violence, harassment and other similar types of behavior discourage people from expressing themselves, and ultimately diminish the value of global public conversation. Our rules are to ensure all people can participate in the public conversation freely and safely.',
        'Recently, a lot of officers has reported many users of our product posted inappropriate content. You will be acting as a detector who is trying to find the evidences that users violating the rules with my help.',
        'I hope that in this way, you could better understand how we provide good user experience to everyone by applying those rules. The following section is adapted from The Twitter Rules: "https://help.twitter.com/en/rules-and-policies/twitter-rules". Some content may be modified to better illustrate the idea.',
      ], 
      pages: [ // start of pages arrays
        {
          description: "Healthy conversation is only possible when people feel safe from abuse and don’t resort to using violent language. There's no room for VIOLENT THREATS of an intent to kill or inflict serious physical harm on others.",
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
          description: "There is no place here for VIOLENT organizations, including TERRORIST organizations, VIOLENT EXTREMIST groups, or individuals who affiliate with and promote their ILLICIT activities. The violence that these groups engage in and/or promote jeopardizes the physical safety and well-being of those targeted.",
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
          description: "We have zero tolerance towards any material that features or promotes CHILD SEXUAL EXPLOITATION, one of the most serious violations of the rules. This may include media, text, illustrated, or computer-generated images. Regardless of the intent, viewing, sharing, or linking to child sexual exploitation material contributes to the re-victimization of the depicted children.",
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
    {
      name: 'Section 2: Privacy',
      introductions: [
        'Hello! Welcom to the section 2 of Interactive ToS test. I am your personal asistant, and I will provide you some important information and guild you through this test.',
        'This section is dedicated to the safety rules that users should all agree to before they use the software. Our purpose is to serve the public conversation. Violence, harassment and other similar types of behavior discourage people from expressing themselves, and ultimately diminish the value of global public conversation. Our rules are to ensure all people can participate in the public conversation freely and safely.',
        'I hope that in this way, you could better understand how we provide good user experience to everyone by applying those rules. The following section is adapted from Twitter privacy policy: "https://help.twitter.com/en/rules-and-policies/twitter-rules". Some content may be modified to better illustrate the idea.',
      ], // end of introductions array
      pages: [
        {
          description: 'Users may not publish or post other people\'s PRIVATE information (such as home phone number and address) without their express authorization and permission. We also PROHIBIT THREATENING to expose private information or INCENTIVIZIN others to do so.',
          items: [
            {
              narration: 'It seems this user posted a private address, does it violate the rule?',
              response: 'Yes, you are correct. Sharing someone\’s private information online without their permission, sometimes called doxxing, is a breach of their privacy and of the Rules. Sharing private information can pose serious safety and security risks for those affected and can lead to physical, emotional, and financial hardship.',
              violatingRules: true,
            },
            {
              narration: 'Looks like this user is an UI designer :) Does the user violate the rule?',
              response: 'This post does not violate the rule.',
              violatingRules: false,
            },
            {
              narration: 'Does the user violate the rule?',
              response: 'This post does not violate the rule.',
              violatingRules: false,
            },
          ], // end of items array
          detailToS: [
            "You may not publish or post other people's private information without their express authorization and permission. We also prohibit threatening to expose private information or incentivizing others to do so.",
            "Sharing someone’s private information online without their permission, sometimes called doxxing, is a breach of their privacy and of the Rules. Sharing private information can pose serious safety and security risks for those affected and can lead to physical, emotional, and financial hardship.",
            "Under this policy, you can’t share the following types of private information, without the permission of the person who it belongs to:",
            "home address or physical location information, including street addresses, GPS coordinates or other identifying information related to locations that are considered private; \n identity documents, including government-issued IDs and social security or other national identity numbers – note: we may make limited exceptions in regions where this information is not considered to be private; \n contact information, including non-public personal phone numbers or email addresses; \n financial account information, including bank account and credit card details; and \n other private information, including biometric data or medical records.",
            "The following behaviors are also not permitted: ",
            "threatening to publicly expose someone’s private information; \n sharing information that would enable individuals to hack or gain access to someone’s private information without their consent,e.g., sharing sign-in credentials for online banking services; \n asking for or offering a bounty or financial reward in exchange for posting someone’s private information; \n asking for a bounty or financial reward in exchange for not posting someone’s private information, sometimes referred to as blackmail.",
          ], // end of detail ToS
        },
        {
          description: 'Users may not publish or post other people\'s PRIVATE information (such as home phone number and address) without their express authorization and permission. We also PROHIBIT THREATENING to expose private information or INCENTIVIZIN others to do so.',
          items: [
            {
              narration: 'Emmm, not sure if this is correct, but does this post violate the rule?',
              response: 'This post does not violate the rule.',
              violatingRules: false,
            },
            {
              narration: 'Looks like this user is helper others, does this post violate the rule?',
              response: 'Yes, you are right. Although the user is helping others, he/she still needs to follow the rule. Sharing someone\’s private information online without their permission, sometimes called doxxing, is a breach of their privacy and of the Rules.',
              violatingRules: true,
            },
            {
              narration: 'Just do it!',
              response: 'This post does not violate the rule.',
              violatingRules: false,
            },
          ], // end of items array
          detailToS: [

          ], // end of detail ToS
        },
        {
          description: 'Users may not publish or post other people\'s PRIVATE information (such as home phone number and address) without their express authorization and permission. We also PROHIBIT THREATENING to expose private information or INCENTIVIZIN others to do so.',
          items: [
            {
              narration: 'This user is posting his phone number, does it violate the rule?',
              response: 'This user is only posting his own information, and this does not violate the rule.',
              violatingRules: false,
            },
            {
              narration: 'Looks like this user is asking for a bounty on the person\'s information, does it voilate the rule?',
              response: 'Yes, you are right. asking for or offering a bounty or financial reward in exchange for posting someone’s private information is violating the privacy rule',
              violatingRules: true,
            },
            {
              narration: 'Does the post violate the rule?',
              response: 'This post does not violate the rule.',
              violatingRules: false,
            },
          ], // end of items array
          detailToS: [

          ], // end of detail ToS
        },
      ], // end of pages array
    },
    {
      name: 'Section 3: Authenticity',
      introductions: [
        'Hello! Welcom to the section 3 of Interactive ToS test. I am your personal asistant, and I will provide you some important information and guild you through this test.',
        'This section is dedicated to the authenticity rules including Platform manipulation and spam and Copyright that users should all agree to before they use the software. Our purpose is to serve the public conversation. Violence, harassment and other similar types of behavior discourage people from expressing themselves, and ultimately diminish the value of global public conversation. Our rules are to ensure all people can participate in the public conversation freely and safely.',
        'I hope that in this way, you could better understand how we provide good user experience to everyone by applying those rules. The following section is adapted from Twitter privacy policy: "https://help.twitter.com/en/rules-and-policies/twitter-rules". Some content may be modified to better illustrate the idea.',
      ], // end of introductions array
      pages: [
        {
          description: 'Users may NOT deceptively promote synthetic or manipulated media that are likely to cause harm. In addition, we may label Tweets containing synthetic and manipulated media to help people understand their authenticity and to provide additional context.',
          items: [
            {
              narration: 'This post seems ok, does it violate the rule?',
              response: 'This post does not violate the rule.',
              violatingRules: false,
            },
            {
              narration: 'This post seems ok, does it violate the rule?',
              response: 'This post does not violate the rule.',
              violatingRules: false,
            },
            {
              narration: 'This post seems to be posted by a fake account, does it violets the rule?',
              response: 'Yes, you are right. You may not deceptively promote synthetic or manipulated media that are likely to cause harm. In addition, we may label Tweets containing synthetic and manipulated media to help people understand their authenticity and to provide additional context. Addtionally, this post also violates the Glorification of Violence policy in Section 1.',
              violatingRules: true,
            },
          ], // end of items array
          detailToS: [
            "You should be able to find reliable information. That means understanding whether the content you see is real or fabricated and having the ability to find more context about what you see. Therefore, we may label posts that include media (videos, audio, and images) that have been deceptively altered or fabricated. In addition, you may not share deceptively altered media in ways that mislead or deceive people about the media's authenticity where threats to physical safety or other serious harm may result.",
            "In order for content to be labeled or removed under this policy, we must have reason to believe that media, or the context in which media are presented, are significantly and deceptively altered or manipulated. Synthetic and manipulated media take many different forms and people can employ a wide range of technologies to produce these media. In assessing whether media have been significantly and deceptively altered or fabricated, some of the factors we consider include: whether the content has been substantially edited in a manner that fundamentally alters its composition, sequence, timing, or framing; any visual or auditory information (such as new video frames, overdubbed audio, or modified subtitles) that has been added or removed; and whether media depicting a real person have been fabricated or simulated",
            "In order to determine if media have been significantly and deceptively altered or fabricated, we may use our own technology or receive reports through partnerships with third parties. In situations where we are unable to reliably determine if media have been altered or fabricated, we may not take action to label or remove them."
          ], // end of detail ToS
        },
        {
          description: 'We will respond to reports of ALLEGED copyright infringement, such as allegations concerning the unauthorized use of a copyrighted image as a profile or header photo, allegations concerning the unauthorized use of a copyrighted video or image uploaded through our media hosting services, or Tweets containing links to allegedly infringing materials.',
          items: [
            {
              narration: 'This post seems to be helpful, does it violate the rule?',
              response: 'This post does not violate the rule.',
              violatingRules: false,
            },
            {
              narration: 'huhuh, but does it violate the rule?',
              response: 'This post does not violate the rule.',
              violatingRules: false,
            },
            {
              narration: 'This user is distributing others drawings, does it violate the rule?',
              response: 'Yes, you are right. We respond to copyright complaints submitted under the Digital Millennium Copyright Act (“DMCA”). Section 512 of the DMCA outlines the statutory requirements necessary for formally reporting copyright infringement, as well as providing instructions on how an affected party can appeal a removal by submitting a compliant counter-notice.',
              violatingRules: true,
            },
          ], // end of items array
          detailToS: [
            "We respond to copyright complaints submitted under the Digital Millennium Copyright Act (“DMCA”). Section 512 of the DMCA outlines the statutory requirements necessary for formally reporting copyright infringement, as well as providing instructions on how an affected party can appeal a removal by submitting a compliant counter-notice.",
            "We will respond to reports of alleged copyright infringement, such as allegations concerning the unauthorized use of a copyrighted image as a profile or header photo, allegations concerning the unauthorized use of a copyrighted video or image uploaded through our media hosting services, or Tweets containing links to allegedly infringing materials. Note that not all unauthorized uses of copyrighted materials are infringements (see our fair use article for more information).",
            "If you are concerned about the use of your brand or entity’s name, please review Twitter’s trademark policy. If you are concerned about a parody, newsfeed, commentary, or fan account, please see the relevant policy here. These are generally not copyright issues.",
          ], // end of detail ToS
        },
      ], // end of pages array
    },
    // {},
  ], // end of sections array
};

export default data;