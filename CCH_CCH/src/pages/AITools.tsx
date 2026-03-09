import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { GoogleGenAI, ThinkingLevel } from '@google/genai';
import { Image, MapPin, BrainCircuit, Loader2 } from 'lucide-react';

// Declare window.aistudio for TypeScript
declare global {
  interface Window {
    aistudio?: {
      hasSelectedApiKey: () => Promise<boolean>;
      openSelectKey: () => Promise<void>;
    };
  }
}

export default function AITools() {
  const [activeTab, setActiveTab] = useState<'image' | 'strategy' | 'maps'>('image');
  const [hasKey, setHasKey] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    checkApiKey();
  }, []);

  const checkApiKey = async () => {
    if (window.aistudio) {
      const has = await window.aistudio.hasSelectedApiKey();
      setHasKey(has);
    } else {
      // Fallback if not in AI Studio environment
      setHasKey(true); 
    }
  };

  const handleSelectKey = async () => {
    if (window.aistudio) {
      await window.aistudio.openSelectKey();
      // Assume success to mitigate race condition
      setHasKey(true);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl">
              Seller <span className="text-orange-600">AI Tools</span>
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              Leverage advanced AI to generate product images, formulate strategies, and analyze local markets.
            </p>
          </div>

          <div className="text-center py-24 bg-orange-50 rounded-3xl border border-orange-100">
            <h2 className="text-4xl font-extrabold text-orange-600 mb-4">Coming Soon</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We are working hard to bring you powerful AI tools to supercharge your ecommerce business. Stay tuned!
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function ImageGenerator() {
  const [prompt, setPrompt] = useState('');
  const [size, setSize] = useState('1K');
  const [aspectRatio, setAspectRatio] = useState('1:1');
  const [model, setModel] = useState('gemini-3-pro-image-preview');
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    if (!prompt) return;
    setLoading(true);
    setError('');
    setImageUrl('');

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: model,
        contents: {
          parts: [{ text: prompt }],
        },
        config: {
          imageConfig: {
            aspectRatio: aspectRatio,
            imageSize: size
          }
        },
      });

      let foundImage = false;
      if (response.candidates && response.candidates[0].content.parts) {
        for (const part of response.candidates[0].content.parts) {
          if (part.inlineData) {
            setImageUrl(`data:image/png;base64,${part.inlineData.data}`);
            foundImage = true;
            break;
          }
        }
      }
      
      if (!foundImage) {
        setError('No image was generated. Please try a different prompt.');
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred during generation.');
      if (err.message && err.message.includes('Requested entity was not found')) {
        if (window.aistudio) {
          await window.aistudio.openSelectKey();
        }
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">AI Product Image Studio</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Image Prompt</label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="e.g., A minimalist white coffee mug on a wooden table with soft morning sunlight..."
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              rows={4}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Model</label>
              <select
                value={model}
                onChange={(e) => setModel(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500"
              >
                <option value="gemini-3-pro-image-preview">Pro Image (Nano Banana Pro)</option>
                <option value="gemini-3.1-flash-image-preview">Flash Image (Nano Banana 2)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Resolution</label>
              <select
                value={size}
                onChange={(e) => setSize(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500"
              >
                <option value="1K">1K</option>
                <option value="2K">2K</option>
                <option value="4K">4K</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Aspect Ratio</label>
            <select
              value={aspectRatio}
              onChange={(e) => setAspectRatio(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500"
            >
              <option value="1:1">1:1 (Square)</option>
              <option value="4:3">4:3 (Standard)</option>
              <option value="3:4">3:4 (Portrait)</option>
              <option value="16:9">16:9 (Widescreen)</option>
              <option value="9:16">9:16 (Vertical Video)</option>
              <option value="3:2">3:2</option>
              <option value="2:3">2:3</option>
              <option value="21:9">21:9 (Ultrawide)</option>
            </select>
          </div>

          <button
            onClick={handleGenerate}
            disabled={loading || !prompt}
            className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Generate Image'}
          </button>
          
          {error && <p className="text-red-600 text-sm">{error}</p>}
        </div>

        <div className="flex flex-col items-center justify-center bg-gray-100 rounded-xl border-2 border-dashed border-gray-300 min-h-[400px] overflow-hidden">
          {imageUrl ? (
            <img src={imageUrl} alt="Generated product" className="max-w-full max-h-[500px] object-contain" />
          ) : (
            <div className="text-center p-6 text-gray-500">
              <Image className="w-12 h-12 mx-auto mb-3 text-gray-400" />
              <p>Your generated image will appear here</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function StrategyAssistant() {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleAsk = async () => {
    if (!query) return;
    setLoading(true);
    setError('');
    setResponse('');

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const res = await ai.models.generateContent({
        model: 'gemini-3.1-pro-preview',
        contents: query,
        config: {
          systemInstruction: "You are an expert ecommerce strategist. Provide detailed, analytical, and actionable advice for online sellers.",
          thinkingConfig: { thinkingLevel: ThinkingLevel.HIGH }
        }
      });
      setResponse(res.text || 'No response generated.');
    } catch (err: any) {
      setError(err.message || 'An error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Deep Strategy Consultant</h2>
      <p className="text-gray-600 mb-6">Ask complex questions about market entry, pricing strategies, or supply chain optimization. The AI will "think" deeply before answering.</p>
      
      <div className="space-y-4">
        <textarea
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="e.g., What is the optimal pricing strategy for a new premium skincare brand launching on Amazon India vs Quick Commerce platforms?"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          rows={4}
        />
        <button
          onClick={handleAsk}
          disabled={loading || !query}
          className="flex justify-center items-center py-3 px-6 border border-transparent rounded-lg shadow-sm text-white bg-orange-600 hover:bg-orange-700 disabled:opacity-50"
        >
          {loading ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : <BrainCircuit className="w-5 h-5 mr-2" />}
          {loading ? 'Thinking Deeply...' : 'Analyze Strategy'}
        </button>

        {error && <p className="text-red-600 text-sm">{error}</p>}

        {response && (
          <div className="mt-8 p-6 bg-white rounded-xl shadow-sm border border-gray-200 prose prose-orange max-w-none">
            <div dangerouslySetInnerHTML={{ __html: response.replace(/\n/g, '<br/>') }} />
          </div>
        )}
      </div>
    </div>
  );
}

function LocalMarketExplorer() {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [links, setLinks] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (!query) return;
    setLoading(true);
    setError('');
    setResponse('');
    setLinks([]);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const res = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: query,
        config: {
          tools: [{ googleMaps: {} }]
        }
      });
      
      setResponse(res.text || 'No response generated.');
      
      // Extract Maps links if available
      const chunks = res.candidates?.[0]?.groundingMetadata?.groundingChunks;
      if (chunks) {
        const extractedLinks = chunks
          .filter((chunk: any) => chunk.maps?.uri)
          .map((chunk: any) => ({
            title: chunk.maps.title || 'View on Google Maps',
            uri: chunk.maps.uri
          }));
        setLinks(extractedLinks);
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Local Market Explorer</h2>
      <p className="text-gray-600 mb-6">Use Google Maps grounding to find local logistics hubs, competitors, or retail locations.</p>
      
      <div className="space-y-4">
        <div className="flex gap-4">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g., Find fulfillment centers near Mumbai"
            className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          />
          <button
            onClick={handleSearch}
            disabled={loading || !query}
            className="flex justify-center items-center py-3 px-6 border border-transparent rounded-lg shadow-sm text-white bg-orange-600 hover:bg-orange-700 disabled:opacity-50 whitespace-nowrap"
          >
            {loading ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : <MapPin className="w-5 h-5 mr-2" />}
            {loading ? 'Searching...' : 'Search Maps'}
          </button>
        </div>

        {error && <p className="text-red-600 text-sm">{error}</p>}

        {response && (
          <div className="mt-8 p-6 bg-white rounded-xl shadow-sm border border-gray-200 prose prose-orange max-w-none">
            <div dangerouslySetInnerHTML={{ __html: response.replace(/\n/g, '<br/>') }} />
            
            {links.length > 0 && (
              <div className="mt-6 pt-6 border-t border-gray-100">
                <h4 className="text-lg font-semibold mb-3">Locations Found:</h4>
                <ul className="space-y-2 list-none pl-0">
                  {links.map((link, idx) => (
                    <li key={idx}>
                      <a href={link.uri} target="_blank" rel="noreferrer" className="text-orange-600 hover:underline flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
