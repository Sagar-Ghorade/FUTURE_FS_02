import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [leads, setLeads] = useState([]);
  const [selectedLead, setSelectedLead] = useState(null);
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");

  // 🔐 Protect Dashboard (Check Login Token)
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      window.location.href = "/login";
    }
  }, []);

  // Fetch all leads
  const fetchLeads = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/leads");
      setLeads(res.data);
    } catch (error) {
      console.error("Error fetching leads:", error);
    }
  };

  // Fetch notes for selected lead
  const fetchNotes = async (leadId) => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/notes/${leadId}`
      );
      setNotes(res.data);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  // Update status
  const updateStatus = async (id, status) => {
    try {
      await axios.put(`http://localhost:5000/api/leads/${id}`, { status });
      fetchLeads();
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  // Add note
  const addNote = async () => {
    if (!newNote || !selectedLead) return;

    try {
      await axios.post(
        `http://localhost:5000/api/notes/${selectedLead.id}`,
        { note: newNote }
      );

      setNewNote("");
      fetchNotes(selectedLead.id);
    } catch (error) {
      console.error("Error adding note:", error);
    }
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h2>Mini CRM Dashboard</h2>

      {/* Leads Table */}
      <table border="1" cellPadding="10" style={{ marginTop: "20px" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead) => (
            <tr key={lead.id}>
              <td>{lead.name}</td>
              <td>{lead.email}</td>
              <td>{lead.status}</td>
              <td>
                <select
                  value={lead.status}
                  onChange={(e) =>
                    updateStatus(lead.id, e.target.value)
                  }
                >
                  <option value="new">New</option>
                  <option value="contacted">Contacted</option>
                  <option value="converted">Converted</option>
                </select>

                <button
                  style={{ marginLeft: "10px" }}
                  onClick={() => {
                    setSelectedLead(lead);
                    fetchNotes(lead.id);
                  }}
                >
                  View Notes
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Notes Section */}
      {selectedLead && (
        <div style={{ marginTop: "30px" }}>
          <h3>Notes for {selectedLead.name}</h3>

          <ul>
            {notes.length === 0 && <p>No notes yet.</p>}
            {notes.map((note) => (
              <li key={note.id}>{note.note}</li>
            ))}
          </ul>

          <input
            type="text"
            placeholder="Add follow-up note"
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            style={{ padding: "5px", width: "300px" }}
          />

          <button
            onClick={addNote}
            style={{ marginLeft: "10px", padding: "5px 10px" }}
          >
            Add Note
          </button>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
