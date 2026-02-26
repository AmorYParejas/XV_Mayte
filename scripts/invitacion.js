  let attendSel = null;

  function selectAttend(v) {
    attendSel = v;
    document.getElementById('btnSi').className = 'toggle-btn' + (v === 'si' ? ' yes' : '');
    document.getElementById('btnNo').className = 'toggle-btn' + (v === 'no' ? ' no' : '');
  }

  function enviarRSVP() {
    const nombre = document.getElementById('nombre').value.trim();
    if (!nombre) {
      const el = document.getElementById('nombre');
      el.style.borderColor = 'var(--rose)';
      el.style.boxShadow = '0 0 0 3px rgba(201,75,114,0.12)';
      el.focus(); return;
    }
    if (!attendSel) { alert('Por favor indica si podrás asistir'); return; }
    document.getElementById('rsvpForm').style.display = 'none';
    document.getElementById('successMsg').classList.add('show');
  }

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in, .tl-item').forEach(el => obs.observe(el));
