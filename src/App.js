import { useState } from 'react';
import Button from './components/Button';
import Input from './components/Input';
import './App.css';
function App() {
  const [number, setNumber] = useState(0);
  // const [name, setName] = useState('');
  // const [tahunLahir, setTahunLahir] = useState('');
  // const [usia, setUsia] = useState('');
  const [form, setForm] = useState({
    name: '',
    usia: '',
    tahunLahir: '',
  });

  const [error, setError] = useState('');

  const klik = () => {
    setNumber(number + 1);
  };

  const handleSubmit = () => {
    if (form.name === '') {
      setError('nama tidak boleh kosong');
    } else if (form.tahunLahir === '') {
      setError('tahun lahir tidak boleh kosong');
    } else {
      setForm({ ...form, usia: 2022 - form.tahunLahir });
    }
  };

  const handleChange = (e) => {
    setError('');
    if (e.target.name === 'name') {
      if (e.target.value.length < 3) {
        setError('Minimal 3 karakter ');
      }
    }
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h1>Counter app</h1>
      <p>Nilai counter saat ini {number}</p>
      <Button onClick={klik}>Click me</Button>
      <hr />
      <h1>Aplikasi input data diri</h1>
      name :{' '}
      <Input
        type='text'
        value={form.name}
        name='name'
        onChange={handleChange}
      />
      <br />
      <br />
      Tahun Lahir :{' '}
      <Input
        type='number'
        value={form.tahunLahir}
        name='tahunLahir'
        handleChange={handleChange}
      />
      <Input />
      <br />
      <br />
      Umur saya : {form.usia}
      <br />
      <br />
      <Button onClick={handleSubmit}>Submit</Button>
      <p style={{ color: 'red' }}>{error}</p>
    </>
  );
}

export default App;
