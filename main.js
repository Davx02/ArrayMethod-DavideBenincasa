        // ordinare 10 numeri di un array in modo crescente

        let arr = [3, 7, 2, -5, 10, 4, -10, 9, 23, 111];

        let ordine = arr.sort( (a, b) => b - a);

        console.log(ordine);

        //  modo decrescente

        let array = [3, 7, 2, -5, 10, 4, -10, 9, 23, 111];

        let ord = arr.sort( (a, b) => a - b);

        console.log(ord);

        // creare due array e sommare i rispettivi elementi

        let arr1 = [1,2,3,4];
        let arr2 = [4,3,2,1];

        let somma = arr1.map((num, i) => num + arr2[i]);
        console.log(somma);

        // Creare una funzione che prende due argomenti e restituisce tutti i numeri divisibili per il divisore dato. Il primo argomento è una array e il secondo è il divisore.

        function numeridivisibili(arr, divisore) {
            let numeridivisibili = arr.filter(numero => numero % divisore == 0);

            return numeridivisibili;
            }

        let numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        let divisore = 2;

        let risultato = numeridivisibili(numeri, divisore);
        console.log(risultato);

        // Dato un array x e un valore y. Tutto ciò che dovete fare è verificare se l'array fornito contiene il valore.

        let numbers = [1,2,3,4,5];

        let Contiene4 = numbers.includes(3, 0);

        console.log(Contiene4);

        let Contiene10 = numbers.includes(10, 0);

        console.log(Contiene10);


        //  Esercizio partite di calcio

        function calculatePoints(partite) {
            let punti = 0;
        
            for (let i = 0; i < partite.length; i++) {
            const [x, y] = partite[i].split(':').map(Number);
        
            
            if (x > y) {
                
                punti += 3;
            } else if (x === y) {
                
                punti += 1;
            }
            
            }
        
            
            return punti;
        }
        
    
        console.log(calculatePoints(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"])); 
        console.log(calculatePoints(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"])); 
        console.log(calculatePoints(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"])); 
        console.log(calculatePoints(["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"])); 
        