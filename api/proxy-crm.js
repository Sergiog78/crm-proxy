export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  const { id_utente, dtda, dta, snote, id_dippsicodiagnostica } = req.body;

  const payload = {
    id_utente,
    dtda,
    dta,
    snote,
    id_dippsicodiagnostica
  };

  try {
    const response = await fetch("https://novamentis.ns0.it/novamentis_crm/webservice/wbsPizzaApp.asmx/getInfoUtente_app", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
