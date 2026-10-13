document.getElementById('budgetForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get values from form
    const income = document.getElementById('income').value;
    const food = document.getElementById('food').value;
    const transport = document.getElementById('transport').value;
    const entertainment = document.getElementById('entertainment').value;
    const other = document.getElementById('other').value;

    // Save the values in localStorage (we use this to pass data to the next page)
    localStorage.setItem('income', income);
    localStorage.setItem('food', food);
    localStorage.setItem('transport', transport);
    localStorage.setItem('entertainment', entertainment);
    localStorage.setItem('other', other);

    // Redirect to the next page (pie chart page)
    window.location.href = "nextPage.html";
});
