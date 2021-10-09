let btn = document.getElementsByTagName('button')[0];

btn.addEventListener('click', function(){
    let textArea = document.getElementsByTagName('textarea')[0];
    let h1 = document.getElementsByTagName('h6')[0];
    
    //ambil field text
    textArea.select();
    textArea.setSelectionRange(0, 99999); //untuk mobile devices 
    
     //Salin teks di dalam bidang teks 
  navigator.clipboard.writeText(textArea.value);
    
    //peringatan ketika sudah di copy
    h1.style.display = 'block';
    
    
});



  
  
