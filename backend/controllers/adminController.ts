// @desc    Registers admin
// route    POST /api/admin/register/
// @access  Public
function registerAdmin(req, res) {
    res.status(200).json({ message: "Register Admin" });
}

// @desc    Authenticates admin
// route    POST /api/admin/login/
// @access  Public
function loginAdmin(req, res) {
    res.status(200).json({ message: "Login Admin" });
}

// @desc    Logs out admin
// route    POST /api/admin/logout/
// @access  Public
function logoutAdmin(req, res) {
    res.status(200).json({ message: "Logout Admin" });
}
