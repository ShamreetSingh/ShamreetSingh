document.addEventListener('DOMContentLoaded', async () => {
    const files = [
       
        'html-files/kissan-veggies.html',
        'html-files/kissan-flowers.html',
        'html-files/kissan-tools.html',
        'html-files/kissan-pesticides.html',
        'html-files/kissan-end-page.html' 
        
    ];

    const contentDiv = document.getElementById('content');
        for (const file of files) {
        const response = await fetch(file);
        if (response.ok) {
            const text = await response.text();
            contentDiv.innerHTML += text; 
          
        } else {
            console.error('Failed to load:', file);
        }
    }
});