        function gettext(){
            fetch('sample.txt')
            .then(function(res)
            {
                console.log(res);
            })

        }
        document.getElementById('getext').addEventListener('click',gettext);