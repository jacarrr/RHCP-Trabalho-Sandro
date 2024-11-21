import React, { useState } from "react";

const ContactForm = () => {
  const [toMail, setToMail] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!toMail || !content) {
      setMessage({ type: "error", text: "Preencha todos os campos." });
      return;
    }

    setLoading(true);
    setMessage(null);

    try {

      const token = "eyJhbGciOiJSUzI1NiIsImtpZCI6ImQ5NzQwYTcwYjA5NzJkY2NmNzVmYTg4YmM1MjliZDE2YTMwNTczYmQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTA4MDYyMDk4MzM0NDY3MDgxMzM4IiwiaGQiOiJtaW5oYS5mYWcuZWR1LmJyIiwiZW1haWwiOiJqbGxhemFyZXR0aUBtaW5oYS5mYWcuZWR1LmJyIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiJEM1BNZ09PQnBpX0NIZVNvNGNWd0tnIiwibmJmIjoxNzMyMTY0NTAzLCJpYXQiOjE3MzIxNjQ4MDMsImV4cCI6MTczMjE2ODQwMywianRpIjoiMjk4OTZiNDM2MGU5YzU1ZTU3ZDE5OGU5YTg3MGVjYmVhYmJkNjg1OCJ9.KIL15kHVmBzJmdPGlN1ytYoKRQWTMolnBQdYJNJrwCJfRiAFrAWzWrEu-yOi8ZjH9oYDaLeWxueCeT46vHX7TIclHen5zXKfgWhllXzdwTVSxcXUti4A3_B58K8cWSQXeTTsl6TqtBfEVxeIzFqoMbqcEjNSb21D97a87cXcDrSi0n-MOiR0U4mReAIHoaTnstnZxAGgm98hOSur5w54FQ4hoI3bQuPHoMWm91GWgdI50ikW1xq63gyEIWUnpEDVJMGb08NB4pLOXY1efX7T7SCzgP_WY2Y4GLm_YduFHwQPNyAcLTPgJQi3VxX9ZSs15CGFNsaSljZDh2bANG4a6A";

      const response = await fetch(
        "/api",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
          body: JSON.stringify({ toMail, content }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setMessage({ type: "success", text: "E-mail enviado com sucesso!" });
        setToMail("");
        setContent("");
      } else {
        setMessage({ type: "error", text: data.error || "Erro ao enviar o e-mail." });
      }
    } catch (error) {
      console.error("Erro:", error);
      setMessage({ type: "error", text: "Erro ao conectar-se ao servidor." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>Contato</h2>
      {message && (
        <div
          style={{
            marginBottom: "20px",
            padding: "10px",
            border: `1px solid ${message.type === "success" ? "green" : "red"}`,
            backgroundColor: message.type === "success" ? "#d4edda" : "#f8d7da",
            color: message.type === "success" ? "#155724" : "#721c24",
          }}
        >
          {message.text}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="toMail" style={{ display: "block", marginBottom: "5px" }}>
            E-mail do destinatário:
          </label>
          <input
            type="email"
            id="toMail"
            name="toMail"
            value={toMail}
            onChange={(e) => setToMail(e.target.value)}
            style={{ width: "100%", padding: "10px", fontSize: "16px" }}
            required
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="content" style={{ display: "block", marginBottom: "5px" }}>
            Mensagem:
          </label>
          <textarea
            id="content"
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            style={{ width: "100%", padding: "10px", fontSize: "16px", minHeight: "100px" }}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          style={{
            backgroundColor: "#007bff",
            color: "#fff",
            padding: "10px 20px",
            fontSize: "16px",
            border: "none",
            cursor: "pointer",
          }}
          disabled={loading}
        >
          {loading ? "Enviando..." : "Enviar"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
