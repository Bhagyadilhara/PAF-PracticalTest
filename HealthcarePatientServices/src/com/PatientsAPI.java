package com;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class PatientsAPI
 */
@WebServlet("/PatientsAPI")
public class PatientsAPI extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	Patient patientObj = new Patient();
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public PatientsAPI() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//response.getWriter().append("Served at: ").append(request.getContextPath());
		//NOT USED
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String output = patientObj.insertPatient(request.getParameter("username"),
						request.getParameter("address"),
						request.getParameter("nic"),
						request.getParameter("dob"),
						request.getParameter("gender"),
						request.getParameter("mobile_number"),
						request.getParameter("email"),
						request.getParameter("password"));
		
		response.getWriter().write(output);
				
				//(username, address, nic, dob, gender, mobile_number, email, password)
	}

	/**
	 * @see HttpServlet#doPut(HttpServletRequest, HttpServletResponse)
	 */
	protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

	/**
	 * @see HttpServlet#doDelete(HttpServletRequest, HttpServletResponse)
	 */
	protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

}
