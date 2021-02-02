const { logoutSuccessMessage } = require('../constants');

const logout = (req, res) => {
  res
    .clearCookie('jwt', {
      maxAge: 3600000 * 24 * 7,
      httpOnly: true,
      sameSite: 'strict',
      secure: true,
    })
    .status(200)
    .send({ message: logoutSuccessMessage });
};

module.exports = { logout };
