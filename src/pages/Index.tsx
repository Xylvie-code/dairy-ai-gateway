import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const GPT_LINK = "https://chatgpt.com/g/g-6934f9b2333c8191a8f01ba83400d74f-raajy-maataa";

const content = {
  en: {
    langToggle: "मराठी",
    title: "Access Your Personal GPT",
    subtitle:
      "This page helps you connect to your personal AI assistant designed for farmers and dairy professionals.",
    accessButton: "Access Your Personal GPT",
    stepsTitle: "How to Use",
    steps: [
      "Download ChatGPT from Play Store or App Store",
      "Create an account or log in",
      "Return to this page",
      'Click "Access Your Personal GPT"',
      "Start chatting using voice or text",
    ],
  },
  mr: {
    langToggle: "English",
    title: "तुमचा वैयक्तिक GPT वापरा",
    subtitle:
      "ही वेबसाईट शेतकरी व दुग्धव्यवसायिकांसाठी तयार केलेल्या AI सहाय्यकाशी जोडण्यासाठी आहे.",
    accessButton: "तुमचा वैयक्तिक GPT उघडा",
    stepsTitle: "वापरण्याची पद्धत",
    steps: [
      "Play Store किंवा App Store मधून ChatGPT डाउनलोड करा",
      "अकाउंट तयार करा किंवा लॉगिन करा",
      "या पेजवर परत या",
      '"तुमचा वैयक्तिक GPT उघडा" वर क्लिक करा',
      "आवाज किंवा मजकूर वापरून प्रश्न विचारा",
    ],
  },
};

const Index = () => {
  const [lang, setLang] = useState<"en" | "mr">("en");
  const t = content[lang];

  const toggleLanguage = () => {
    setLang((prev) => (prev === "en" ? "mr" : "en"));
  };

  return (
    <div className="min-h-screen bg-background px-4 py-8 flex flex-col items-center">
      {/* Language Toggle */}
      <div className="w-full max-w-2xl flex justify-end mb-4">
        <Button
          onClick={toggleLanguage}
          className="bg-primary text-primary-foreground hover:bg-primary/90 px-5 py-2 text-base font-medium"
        >
          {t.langToggle}
        </Button>
      </div>

      {/* Main Card */}
      <Card className="w-full max-w-2xl shadow-lg border-0">
        <CardContent className="p-6 sm:p-8">
          {/* Title */}
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-4">
            {t.title}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-muted-foreground text-center mb-8 leading-relaxed">
            {t.subtitle}
          </p>

          {/* Access Button */}
          <a
            href={GPT_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full"
          >
            <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-lg sm:text-xl py-6 font-semibold shadow-md">
              {t.accessButton}
            </Button>
          </a>

          {/* Steps Section */}
          <div className="mt-10 bg-muted rounded-lg p-5 sm:p-6">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              {t.stepsTitle}
            </h2>
            <ol className="space-y-3 list-decimal list-inside text-base sm:text-lg text-foreground leading-relaxed">
              {t.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;
