function readFile() {
            const fileInput = document.getElementById('fileInput');
            const file = fileInput.files[0];
            if (!file) {
                alert('Пожалуйста, выберите файл');
                return;
            }
            const reader = new FileReader();
            reader.onload = function(e) {
                const content = e.target.result;
                const lines = content.split('\n').filter(line => !line.includes('Update battle state'));
                const table = document.getElementById('fileContent');
                table.innerHTML = '';
                lines.forEach(line => {
                    const row = document.createElement('tr');
                    const dateCell = document.createElement('td');
                    const numberCell = document.createElement('td');
                    const side0Cell = document.createElement('td');
                    const side1Cell = document.createElement('td');
                    let [dateString, timeString, ...logParts] = line.split(' ');
                    let log = logParts.join(' ');
                    const [day, month, year] = dateString.split('.');
                    const date = new Date(year, month - 1, day);
                    dateCell.textContent = timeString;
                    
                    if (log.startsWith('Try reinforce ')) {
                        const numberMatch = log.match(/Try reinforce (\d+)/);
                        if (numberMatch) {
                            numberCell.textContent = numberMatch[1];
                            log = log.replace(numberMatch[0], '');
                        }
                    }

                    if (log.includes('side=0')) {
                        side0Cell.textContent = log;
                        log = '';
                    }

                    if (log.includes('side=1')) {
                        side1Cell.textContent = log;
                        log = '';
                    }

                    row.appendChild(dateCell);
                    row.appendChild(numberCell);
                    row.appendChild(side0Cell);
                    row.appendChild(side1Cell);
                    table.appendChild(row);
                });
            };
            reader.readAsText(file);
        }
