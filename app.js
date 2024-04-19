import ollama from "ollama";

async function run() {
  const prompt = "Benefits of AI IN Healthcare?";
  const message = { role: "user", content: prompt };
  const response = await ollama.chat({
    model: "llama3",
    messages: [message],
    stream: true,
  });
  for await (const part of response) {
    process.stdout.write(part.message.content);
  }
}

run();
