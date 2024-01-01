<script>
    function fetchEmployees(callback) {
        fetch('get_employees.php') // Substitua pelo caminho correto para o arquivo PHP que busca os empregados
            .then(response => response.json())
            .then(data => {
                callback(data);
            })
            .catch(error => console.error('Erro ao buscar empregados:', error));
    }

    function renderTable(data) {
        const tableBody = document.querySelector('table tbody');
    tableBody.innerHTML = '';

        data.forEach(employee => {
            const row = document.createElement('tr');

    // Criar as células da linha e preenchê-las com os dados do empregado
    const cellId = document.createElement('td');
    cellId.textContent = employee.id;
    row.appendChild(cellId);

    const cellNome = document.createElement('td');
    cellNome.textContent = employee.nome;
    row.appendChild(cellNome);

    const cellSalarioBruto = document.createElement('td');
    cellSalarioBruto.textContent = employee.salario_bruto;
    row.appendChild(cellSalarioBruto);

    const cellDepartamento = document.createElement('td');
    cellDepartamento.textContent = employee.departamento;
    row.appendChild(cellDepartamento);

    // ... Criar as outras células da linha

    tableBody.appendChild(row);
        });
    }

    function initTable() {
        fetchEmployees(data => {
            employees = data;
            renderTable(employees);
        });
    }

    function sortBySalary(asc) {
        const sortedEmployees = employees.slice().sort((a, b) => {
            return asc ? b.salario_bruto - a.salario_bruto : a.salario_bruto - b.salario_bruto;
        });

    renderTable(sortedEmployees);
    }

    function sortByDepartment() {
        const sortedEmployees = employees.slice().sort((a, b) => {
            return a.departamento.localeCompare(b.departamento);
        });

    renderTable(sortedEmployees);
    }

    document.getElementById('sort-salary').addEventListener('click', () => {
        const currentOrder = document.getElementById('sort-salary').dataset.order || 'asc';
    const newOrder = currentOrder === 'asc' ? 'desc' : 'asc';
    document.getElementById('sort-salary').dataset.order = newOrder;

    sortBySalary(newOrder === 'asc');
    });

    document.getElementById('sort-department').addEventListener('click', () => {
        sortByDepartment();
    });

    // Chamar a função inicial para buscar e renderizar os dados dos empregados
    initTable();
</script>
