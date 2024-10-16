window.addEventListener('load', function() {

    function fetchWordDetails(word) {
        fetch(`/words/${word}`)
        .then(response => response.json())
        .then(function(data) {
            const definitionContainer = document.getElementById('definition-container');
            
            if (data.status !== "info not present") {
                definitionContainer.innerHTML = `
                    <strong>${data.word}</strong><br>
                    <em>Pronunciation:</em> ${data.pronunciation}<br>
                    <em>Definition:</em> ${data.definition}
                `;
                definitionContainer.style.display = 'block';
            }
        })
        .catch(error => console.error('Error fetching word details:', error));
    }

    function hideDefinition() {
        const definitionContainer = document.getElementById('definition-container');
        definitionContainer.style.display = 'none';
    }

    document.querySelectorAll('.word').forEach(wordElement => {
        wordElement.addEventListener('mouseover', function(event) {
            const word = event.target.getAttribute('data-word'); 
            fetchWordDetails(word);
        });
        wordElement.addEventListener('mouseleave', hideDefinition);
    });
});