exports.sendtokenStudent = (student, statusCode, res) => {
    const token = student.getJWTToken();
  
    // options for cookie
    const options = {
      expires: new Date(
        Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
      ),
       httpOnly:true ,
       sameSite: 'None', 
       secure: true
    };
    res.cookie("token", token, options);
   res.status(statusCode).json({
      success: true,
      student,
      token,
    });

  };
  exports.sendtokenAdmin = (admin, statusCode, res) => {
    const token = admin.getJWTToken();
  
    // options for cookie
    const options = {
      expires: new Date(
        Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
      ),
       httpOnly:true ,
       sameSite: 'None', 
       secure: true
    };
    res.cookie("token", token, options);
   res.status(statusCode).json({
      success: true,
      admin,
      token,
    });

  };


  exports.sendtokenTeacher = (teacher, statusCode, res) => {
    const token = teacher.getJWTToken();
  
    // options for cookie
    const options = {
      expires: new Date(
        Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
      ),
       httpOnly:true ,
       sameSite: 'None', 
       secure: true
    };
    res.cookie("token", token, options);
   res.status(statusCode).json({
      success: true,
      teacher,
      token,
    });

  };
  
