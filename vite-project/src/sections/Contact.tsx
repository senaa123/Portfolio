import { useState, useMemo } from "react";
import { Mail, MapPin, Github, Linkedin, Phone } from "lucide-react";
import { TypewriterCode } from "../Components/TypewriterCode";
import emailjs from "@emailjs/browser";

export const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState<"" | "success" | "error">("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
            if (serviceId && templateId && publicKey) {
                await emailjs.send(serviceId, templateId, formData, publicKey);
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        } finally {
            setIsLoading(false);
        }
    };

    const contactCodeLines = useMemo(() => [
        [{ text: "const", className: "text-[#4A5C6A]" }, { text: " message ", className: "text-[#CCD0CF]" }, { text: "= {", className: "text-[#4A5C6A]" }],
        [],
        [{ text: "  name:", className: "text-[#9BA8AB]" }],
        [
            { 
                text: "", 
                className: "block mt-2 mb-4 pl-2", 
                node: (
                    <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        placeholder='"your name"'
                        className="w-full px-4 py-3 bg-[#1A1E23] rounded-md border border-[#253745] focus:border-[#CCD0CF] outline-none text-[#CCD0CF] placeholder-[#4A5C6A] transition-colors"
                    />
                ) 
            }
        ],
        [{ text: "  email:", className: "text-[#9BA8AB]" }],
        [
            { 
                text: "", 
                className: "block mt-2 mb-4 pl-2", 
                node: (
                    <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        placeholder='"you@email.com"'
                        className="w-full px-4 py-3 bg-[#1A1E23] rounded-md border border-[#253745] focus:border-[#CCD0CF] outline-none text-[#CCD0CF] placeholder-[#4A5C6A] transition-colors"
                    />
                ) 
            }
        ],
        [{ text: "  body:", className: "text-[#9BA8AB]" }],
        [
            { 
                text: "", 
                className: "block mt-2 mb-4 pl-2", 
                node: (
                    <textarea
                        required
                        rows={3}
                        value={formData.message}
                        onChange={e => setFormData(prev => ({ ...prev, message: e.target.value }))}
                        placeholder='"let me know..."'
                        className="w-full px-4 py-3 bg-[#1A1E23] rounded-md border border-[#253745] focus:border-[#CCD0CF] outline-none text-[#CCD0CF] placeholder-[#4A5C6A] resize-none transition-colors"
                    />
                ) 
            }
        ],
        [{ text: "};", className: "text-[#CCD0CF]" }],
        [],
    ], [formData]);

    return (
        <section id="contact" className="py-24 bg-[#06141B]">
            <div className="container mx-auto px-6 max-w-7xl">

                <div className="mb-12">
                    <p className="text-sm font-mono-custom text-[#9BA8AB] mb-2">&lt;05&gt; contact</p>
                    <h2 className="text-4xl font-bold text-[#CCD0CF]">Let's build something.</h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* Left — contact info */}
                    <div className="space-y-8">
                        <p className="text-lg text-[#9BA8AB] max-w-md leading-relaxed">
                            Open to AI/ML , data engineering and full-stack internship opportunities. Reach out directly or through the form.
                        </p>

                        <div className="space-y-4 pt-2">
                            <a href="mailto:senandulneth1@gmail.com" className="flex items-center gap-4 group">
                                <div className="p-3 rounded border border-[#253745] text-[#4A5C6A] transition-all duration-300 group-hover:-translate-y-[2px] group-hover:border-[#4A5C6A]">
                                    <Mail className="w-5 h-5 group-hover:text-[#CCD0CF] transition-colors" />
                                </div>
                                <div>
                                    <div className="text-xs font-mono-custom text-[#9BA8AB]">email</div>
                                    <div className="text-[#CCD0CF]">senandulneth1@gmail.com</div>
                                </div>
                            </a>

                            <a href="tel:+94714242312" className="flex items-center gap-4 group">
                                <div className="p-3 rounded border border-[#253745] text-[#4A5C6A] transition-all duration-300 group-hover:-translate-y-[2px] group-hover:border-[#4A5C6A]">
                                    <Phone className="w-5 h-5 group-hover:text-[#CCD0CF] transition-colors" />
                                </div>
                                <div>
                                    <div className="text-xs font-mono-custom text-[#9BA8AB]">phone</div>
                                    <div className="text-[#CCD0CF]">+94 71 424 2312</div>
                                </div>
                            </a>

                            <div className="flex items-center gap-4 group">
                                <div className="p-3 rounded border border-[#253745] text-[#4A5C6A] transition-all duration-300 group-hover:-translate-y-[2px] group-hover:border-[#4A5C6A]">
                                    <MapPin className="w-5 h-5 group-hover:text-[#CCD0CF] transition-colors" />
                                </div>
                                <div>
                                    <div className="text-xs font-mono-custom text-[#9BA8AB]">location</div>
                                    <div className="text-[#CCD0CF]">Malabe, Colombo</div>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4 pt-2">
                            <a href="https://github.com/senaa123/" target="_blank" rel="noreferrer"
                                className="p-3 rounded border border-[#253745] text-[#4A5C6A] transition-all duration-300 hover:-translate-y-[2px] hover:text-white hover:border-[#4A5C6A]">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="https://www.linkedin.com/in/senan-jayasinghe/" target="_blank" rel="noreferrer"
                                className="p-3 rounded border border-[#253745] text-[#4A5C6A] transition-all duration-300 hover:-translate-y-[2px] hover:text-white hover:border-[#4A5C6A]">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Right — code-styled form */}
                    <form onSubmit={handleSubmit}>
                        <TypewriterCode lines={contactCodeLines} fileName="message.ts" typingSpeed={15}>
                            <div className="pt-4">
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="group w-full inline-flex items-center justify-center gap-3 px-6 py-3 bg-[#CCD0CF] text-[#06141B] font-medium rounded transition-all duration-300 hover:bg-white hover:-translate-y-[2px] disabled:opacity-50"
                                >
                                    {isLoading ? "sending..." : "send message →"}
                                </button>
                                {status === "success" && (
                                    <p className="text-green-400 text-xs mt-4">// message sent successfully!</p>
                                )}
                                {status === "error" && (
                                    <p className="text-red-400 text-xs mt-4">// failed to send. check config.</p>
                                )}
                            </div>
                        </TypewriterCode>
                    </form>

                </div>
            </div>
        </section>
    );
};