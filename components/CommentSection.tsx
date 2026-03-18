"use client";
import { useState } from "react";

type Comment = {
  id: string;
  name: string;
  text: string;
  date: string;
  replies: Comment[];
};

export function CommentSection({ slug, title }: { slug: string; title: string }) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [replyTo, setReplyTo] = useState<string | null>(null);
  const [replyName, setReplyName] = useState("");
  const [replyText, setReplyText] = useState("");

  const handleSubmit = () => {
    if (!name.trim() || !text.trim()) return;
    const newComment: Comment = {
      id: Date.now().toString(),
      name: name.trim(),
      text: text.trim(),
      date: new Date().toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }),
      replies: [],
    };
    setComments([newComment, ...comments]);
    setText("");
  };

  const handleReply = (parentId: string) => {
    if (!replyName.trim() || !replyText.trim()) return;
    const reply: Comment = {
      id: Date.now().toString(),
      name: replyName.trim(),
      text: replyText.trim(),
      date: new Date().toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }),
      replies: [],
    };
    setComments(comments.map(c =>
      c.id === parentId ? { ...c, replies: [...c.replies, reply] } : c
    ));
    setReplyTo(null);
    setReplyName("");
    setReplyText("");
  };

  const inputStyle = {
    width: "100%",
    padding: "12px 16px",
    borderRadius: 10,
    border: "1.5px solid #e8e8e4",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 14,
    color: "#1a1a1a",
    background: "#fff",
    outline: "none",
  };

  return (
    <section style={{ marginTop: 48, paddingTop: 40, borderTop: "1px solid #f0f0ec" }} aria-label="Discussion">
      {/* SEO-friendly heading */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
        <div>
          <h2 style={{
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontSize: 22, fontWeight: 700, color: "#1a1a1a", margin: "0 0 4px",
          }}>
            Discussion
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#999", margin: 0 }}>
            Share your thoughts, ask questions, or start a conversation about this entry.
          </p>
        </div>
        <div style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 600,
          color: "#1a8a5c", background: "#edf7f1",
          borderRadius: 20, padding: "6px 14px",
        }}>
          {comments.length} {comments.length === 1 ? "comment" : "comments"}
        </div>
      </div>

      {/* New comment form */}
      <div style={{
        background: "#fff", borderRadius: 16, padding: 24,
        border: "1px solid #f0f0ec", marginBottom: 24,
        boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
      }}>
        <div style={{ display: "flex", gap: 12, marginBottom: 12 }}>
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ ...inputStyle, flex: "0 0 180px" }}
          />
        </div>
        <textarea
          placeholder="Join the discussion... Share your experience, ask a question, or leave feedback."
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={3}
          style={{
            ...inputStyle,
            resize: "vertical",
            minHeight: 80,
            marginBottom: 12,
          }}
        />
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button
            onClick={handleSubmit}
            style={{
              background: "#1a8a5c", border: "none", borderRadius: 10,
              padding: "10px 24px", fontFamily: "'DM Sans', sans-serif",
              fontSize: 14, fontWeight: 600, color: "#fff", cursor: "pointer",
              opacity: (!name.trim() || !text.trim()) ? 0.5 : 1,
            }}
          >
            Post Comment
          </button>
        </div>
      </div>

      {/* Empty state */}
      {comments.length === 0 && (
        <div style={{
          textAlign: "center", padding: "40px 20px",
          background: "#fafaf8", borderRadius: 16,
          border: "1px dashed #e0e0dc",
        }}>
          <div style={{ fontSize: 32, marginBottom: 12 }}>💬</div>
          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 15,
            fontWeight: 600, color: "#1a1a1a", margin: "0 0 6px",
          }}>
            Be the first to comment
          </p>
          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 13,
            color: "#999", margin: 0,
          }}>
            Start a conversation about AI in finance — every perspective matters.
          </p>
        </div>
      )}

      {/* Comment list */}
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {comments.map((comment) => (
          <div key={comment.id} style={{
            background: "#fff", borderRadius: 16, padding: 24,
            border: "1px solid #f0f0ec",
          }}>
            {/* Comment header */}
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <div style={{
                width: 34, height: 34, borderRadius: 10,
                background: "#edf7f1", display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 14, color: "#1a8a5c",
              }}>
                {comment.name.charAt(0).toUpperCase()}
              </div>
              <div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 600, color: "#1a1a1a" }}>
                  {comment.name}
                </div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "#bbb" }}>
                  {comment.date}
                </div>
              </div>
            </div>

            {/* Comment body */}
            <p style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: 14.5,
              color: "#555", lineHeight: 1.7, margin: "0 0 12px",
            }}>
              {comment.text}
            </p>

            {/* Reply button */}
            <button
              onClick={() => setReplyTo(replyTo === comment.id ? null : comment.id)}
              style={{
                background: "none", border: "none", cursor: "pointer",
                fontFamily: "'DM Sans', sans-serif", fontSize: 13,
                fontWeight: 600, color: "#1a8a5c", padding: 0,
              }}
            >
              {replyTo === comment.id ? "Cancel" : "Reply"}
            </button>

            {/* Reply form */}
            {replyTo === comment.id && (
              <div style={{ marginTop: 16, paddingLeft: 20, borderLeft: "2px solid #edf7f1" }}>
                <input
                  type="text"
                  placeholder="Your name"
                  value={replyName}
                  onChange={(e) => setReplyName(e.target.value)}
                  style={{ ...inputStyle, marginBottom: 8, maxWidth: 180 }}
                />
                <textarea
                  placeholder="Write a reply..."
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  rows={2}
                  style={{ ...inputStyle, resize: "vertical", minHeight: 60, marginBottom: 8 }}
                />
                <button
                  onClick={() => handleReply(comment.id)}
                  style={{
                    background: "#1a8a5c", border: "none", borderRadius: 8,
                    padding: "8px 18px", fontFamily: "'DM Sans', sans-serif",
                    fontSize: 13, fontWeight: 600, color: "#fff", cursor: "pointer",
                  }}
                >
                  Post Reply
                </button>
              </div>
            )}

            {/* Replies */}
            {comment.replies.length > 0 && (
              <div style={{ marginTop: 16, paddingLeft: 20, borderLeft: "2px solid #edf7f1", display: "flex", flexDirection: "column", gap: 14 }}>
                {comment.replies.map((reply) => (
                  <div key={reply.id}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                      <div style={{
                        width: 26, height: 26, borderRadius: 8,
                        background: "#f5f5f2", display: "flex", alignItems: "center", justifyContent: "center",
                        fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 11, color: "#888",
                      }}>
                        {reply.name.charAt(0).toUpperCase()}
                      </div>
                      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 600, color: "#1a1a1a" }}>{reply.name}</span>
                      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: "#bbb" }}>{reply.date}</span>
                    </div>
                    <p style={{
                      fontFamily: "'DM Sans', sans-serif", fontSize: 13.5,
                      color: "#666", lineHeight: 1.65, margin: 0, paddingLeft: 34,
                    }}>
                      {reply.text}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
