# Running llama3 Locally

[llama3](https://ai.meta.com/blog/meta-llama-3/) is the new latest and greatest Open Source LLM from Meta AI. Being trained on trillions of token data, it is one of the most powerful LLM available as of now.

[<img src="https://raw.githubusercontent.com/dbanswan/run-llama3-locally/main/llama3.png">](https://raw.githubusercontent.com/dbanswan/run-llama3-locally/main/llama3.png)

From [Meta AI](https://ai.meta.com/blog/meta-llama-3/):

> "Llama 3 is pretrained on over 15T tokens that were all collected from publicly available sources. Our training dataset is seven times larger than that used for Llama 2, and it includes four times more code. To prepare for upcoming multilingual use cases, over 5% of the Llama 3 pretraining dataset consists of high-quality non-English data that covers over 30 languages. However, we do not expect the same level of performance in these languages as in English."

**In this repositry we will running llama3 locally on a Macbook Air M1 Base Model**. So no GPU's here, we will be doing everything on a CPU. Also it doesn't matter if on a mac or windows or linux the steps are the same. The performance might vary depending on your system specs though.

With the help of our good friends over at [Ollama](https://ollama.com/), this will be a breeze.

## Prerequisites

1. Download [Ollama](https://ollama.com/)
2. Run `ollama run llama3` in the terminal/cmd. This will be the 8b model.
3. Clone this repo
4. Run `npm install`
5. Run `npm start`

This will run using the prompt

```javascript
const prompt = "Benefits of AI IN Healthcare?"; // Change this to whatever you want
```

Sample Response

```
Artificial Intelligence (AI) has numerous benefits in healthcare, transforming the industry in various ways. Some of the most significant advantages include:

1. **Improved Patient Outcomes**: AI-powered systems can analyze patient data to predict potential complications and provide personalized treatment plans, leading to better outcomes.
2. **Enhanced Diagnostic Accuracy**: AI algorithms can analyze medical images, lab results, and other data to improve diagnostic accuracy, reducing misdiagnoses and improving patient care.
3. **Streamlined Clinical Workflow**: AI-powered systems can automate routine tasks, freeing up clinicians to focus on more complex and high-value tasks, such as decision-making and patient care.
4. **Personalized Medicine**: AI can analyze genomic data to identify personalized treatment options for patients with rare or complex conditions, leading to improved treatment outcomes.
5. **Predictive Maintenance**: AI-powered systems can predict equipment failures, reducing downtime and improving overall hospital operations.
6. **Patient Engagement**: AI-powered chatbots and virtual assistants can engage patients in their care, providing education, support, and reminders to improve adherence to treatment plans.
7. **Reduced Costs**: AI can help reduce healthcare costs by:
        * Reducing unnecessary procedures and tests
        * Improving medication adherence and reducing hospital readmissions
        * Streamlining clinical workflows and reducing administrative tasks
8. **Improved Medication Management**: AI-powered systems can analyze patient data to identify potential medication errors, improve dosing, and provide personalized treatment plans.
9. **Enhanced Clinical Decision Support**: AI algorithms can analyze vast amounts of medical literature and evidence-based guidelines to provide clinicians with real-time decision support.
10. **Research and Development**: AI can accelerate biomedical research by:
        * Analyzing large datasets and identifying patterns
        * Simulating complex biological systems
        * Identifying new therapeutic targets and biomarkers
11. **Remote Patient Monitoring**: AI-powered systems can monitor patients remotely, enabling early detection of complications and improving patient care.
12. **Pharmaceutical Development**: AI can accelerate drug development by:
        * Predicting clinical trial outcomes
        * Identifying potential adverse effects
        * Optimizing dosing regimens

These benefits are transforming the healthcare industry, enabling more effective, efficient, and personalized patient care. As AI continues to evolve, we can expect even more innovative applications in healthcare.%
```

Response started streaming in about 10 seconds.
**And that's it! You have successfully run llama3 locally.**
