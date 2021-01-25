const newArray = Array.from(new Array(4))

let fakeArraySteps = newArray.map((step, index) => {
  return {
    id: `step${index + 1}`,
    name: `step${index + 1}`,
  }
})

export default fakeArraySteps

export const eRecords = [
  {
    namePage: "General information",
    descriptionPage:
      "Each field is required to receive your social security card from the Social Security Administration. We need this information to ensure your package is accurate and complete.",
    applicationHelp: {
      nameBlock: "Application Help",
      helpBlock: {
        nameBlock: "",
        textBlock: "",
      },
    },
    applicantInformation: {
      nameBlock: "Applicant Information",
      inputsBlock: {
        arrayInputs: [
          {
            nameBlock: "Reason for name change",
            textBlock:
              "Please specify the closest reason for the name change of the applicant.",
            input: ["Marriage", "Divorce", "Adoption"],
          },
          {
            nameBlock: "Gender",
            textBlock: "Please provide the applicant's gender.",
            input: ["Male", "Female"],
          },
          {
            nameBlock: "New First Name",
            textBlock: "Please provide the applicant's gender.",
            input: "",
          },
          {
            nameBlock: "Middle Name",
            textBlock: "Please provide the applicant's gender.",
            input: "",
          },
          {
            nameBlock: "New Last Name",
            textBlock: "Please provide the applicant's gender.",
            input: "",
          },
          {
            nameBlock: "Previous Middle Name",
            textBlock: "Please provide the applicant's gender.",
            input: "",
          },
          {
            nameBlock: "Previous Last Name",
            textBlock: "Please provide the applicant's gender.",
            input: "",
          },
          {
            nameBlock: "Social Security Number",
            textBlock: "Please provide the applicant's gender.",
            input: "input date",
          },
          {
            nameBlock: "Did you have a different name at birth?",
            textBlock: "Please provide the applicant's gender.",
            input: ["No", "Yes"],
          },
          {
            nameBlock: "Are you using other names?",
            textBlock: "Please provide the applicant's gender.",
            input: ["No", "Yes"],
          },
          {
            nameBlock: "Was your name different on your previous card?",
            textBlock: "Please provide the applicant's gender.",
            input: ["No", "Yes"],
          },
        ],
      },
    },
  },
  {
    namePage: "General information",
    applicationHelp: {
      nameBlock: "Application Help",
      helpBlock: {
        nameBlock: "",
        textBlock: "",
      },
    },
    Citizenship: {
      nameBlock: "Citizenship",
      helpBlock: {
        nameBlock: "",
        textBlock: "",
      },
    },
    applicantInformation: {
      nameBlock: "Citizenship and Birth",
      inputsBlock: {
        arrayInputs: [
          {
            nameBlock: "Reason for name change",
            textBlock:
              "Please specify the closest reason for the name change of the applicant.",
            input: ["Marriage", "Divorce", "Adoption"],
          },
          {
            nameBlock: "Gender",
            textBlock: "Please provide the applicant's gender.",
            input: ["Male", "Female"],
          },
          {
            nameBlock: "New First Name",
            textBlock: "Please provide the applicant's gender.",
            input: "",
          },
          {
            nameBlock: "Middle Name",
            textBlock: "Please provide the applicant's gender.",
            input: "",
          },
          {
            nameBlock: "New Last Name",
            textBlock: "Please provide the applicant's gender.",
            input: "",
          },
          {
            nameBlock: "Previous Middle Name",
            textBlock: "Please provide the applicant's gender.",
            input: "",
          },
          {
            nameBlock: "Previous Last Name",
            textBlock: "Please provide the applicant's gender.",
            input: "",
          },
          {
            nameBlock: "Social Security Number",
            textBlock: "Please provide the applicant's gender.",
            input: "input date",
          },
          {
            nameBlock: "Did you have a different name at birth?",
            textBlock: "Please provide the applicant's gender.",
            input: ["No", "Yes"],
          },
          {
            nameBlock: "Are you using other names?",
            textBlock: "Please provide the applicant's gender.",
            input: ["No", "Yes"],
          },
          {
            nameBlock: "Was your name different on your previous card?",
            textBlock: "Please provide the applicant's gender.",
            input: ["No", "Yes"],
          },
        ],
      },
    },
  },
  {},
  {},
]

// arrayBlocks: Array.from(new Array(2)).map((block, ind) => {
//   return {
//     id: `block${index + (ind + 1) ** 2}`,
//     name: `block${index + (ind + 1) ** 2}`,
//     arrayInput: Array.from(new Array(11)).
//   }
// }),
