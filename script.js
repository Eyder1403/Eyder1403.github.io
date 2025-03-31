const defaultUsers = [
    { username: "admin", password: "admin123", role: "admin" },
    { username: "user", password: "user123", role: "user" },
];

// Guardar los usuarios predeterminados en localStorage si no existen
if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify(defaultUsers));
}

// Función para manejar el login
function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const users = JSON.parse(localStorage.getItem('users'));
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        alert(`Bienvenido ${user.username}! Tu rol es ${user.role}.`);
        // Aquí puedes redirigir al usuario o cambiar la vista según el rol
        if (user.role === "admin") {
            // Redirigir a la página del administrador o mostrar contenido de admin
            window.location.href = 'indexadmin.html'; // Ejemplo de redirección
        } else {
            // Redirigir a la página del usuario normal o mostrar contenido de usuario
            window.location.href = 'indexuser.html'; // Ejemplo de redirección
        }
    } else {
        alert("Usuario o contraseña incorrecta!");
    }
}

// Función para manejar la creación de un nuevo usuario
function handleCreateUser(event) {
    event.preventDefault();
    const username = document.getElementById('newUsername').value;
    const password = document.getElementById('newPassword').value;
    const role = document.getElementById('newRole').value;

    const users = JSON.parse(localStorage.getItem('users'));
    const userExists = users.some(user => user.username === username);

    if (userExists) {
        alert("El nombre de usuario ya existe. Por favor, elige otro.");
    } else {
        users.push({ username, password, role });
        localStorage.setItem('users', JSON.stringify(users));
        alert(`Usuario ${username} creado con éxito!`);
        // Redirigir al formulario de inicio de sesión después de crear el usuario
        window.location.href = 'login.html';
    }
}

document.getElementById('loginForm').addEventListener('submit', handleLogin);
document.getElementById('createUserForm').addEventListener('submit', handleCreateUser);
