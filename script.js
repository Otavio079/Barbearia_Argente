document.addEventListener('DOMContentLoaded', () => {
  const horaSelect = document.getElementById('hora');

  function carregarHorariosFixos() {
    for (let i = 8; i <= 18; i++) {
      const hora = i.toString().padStart(2, '0') + ':00';
      const option = document.createElement('option');
      option.value = hora;
      option.textContent = hora;
      horaSelect.appendChild(option);
    }
  }

  carregarHorariosFixos();
});

const button = document.querySelector('button');

const addloading = () => {
  button.innerHTML = '<img src="https://cdn-icons-png.flaticon.com/512/6356/6356659.png" class="loading">';
}

const removeloading = () => {
  button.innerHTML = 'Agendar';
}

const handleSubmit = (Event) => {
  Event.preventDefault();
  addloading();

  const Nome = document.getElementById('nome').value;
  const Telefone = document.getElementById('telefone').value;
  const Serviço = document.getElementById('servico').value;
  const Data = document.getElementById('data').value;
  const Hora = document.getElementById('hora').value;

 
  fetch('https://api.sheetmonkey.io/form/uZq9mpJQaNsoTangyb2kJs', {
 
  method: 'post',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ Nome, Telefone, Serviço, Data, Hora,})
  }).then(() => removeloading());

}
  
 document.getElementById('agendamentoForm').addEventListener('submit', handleSubmit)



 



