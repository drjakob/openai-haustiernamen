import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const completion = await openai.createCompletion("text-davinci-002", {
    prompt: generatePrompt(req.body.animal),
    temperature: 0.4,
  });
  res.status(200).json({ result: completion.data.choices[0].text });
}

function generatePrompt(animal) {
  const capitalizedAnimal =
    animal[0].toUpperCase() + animal.slice(1).toLowerCase();
  return `Suggest three names for an animal that is a superhero.

Animal: Katze
Names: Kapitän Scharfklaue, Herr Flauschball, Fellissimo
Animal: Hund
Names: Super Rex, Wunderhund, König Bello
Animal: Wellensittich
Names: Blaubart, Flyderman, Wellinator 
Animal: Hase
Names: Superklopfer, Pfotinator, Flauschator
Animal: ${capitalizedAnimal}
Names:`;
}
