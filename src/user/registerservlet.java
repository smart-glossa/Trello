package user;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONException;
import org.json.JSONObject;

/**
 * Servlet implementation class registerservlet
 */
@WebServlet("/registerservlet")
public class registerservlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

    /**
     * Default constructor. 
     */
    public registerservlet() {
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String operation=request.getParameter("operation");
		registerclass registerObject=new registerclass();
		if(operation.equals("1"))
		{
			String userName=request.getParameter("userName");
			String pass=request.getParameter("pass");
			String fullName=request.getParameter("fullName"); 
			JSONObject result;
			try{
				result= registerObject.register(userName,pass,fullName);
				
				response.getWriter().print (result);
				
				
			}
			catch(JSONException e)
			
			{
			e.printStackTrace();
				
			}
		}
		if (operation.equals("2")){
			String userName=request.getParameter("userName");
			String pass=request.getParameter("pass");
			JSONObject result;
			try{
				result=registerObject.login(userName, pass);
				response.getWriter().print(result);
			}
			catch(JSONException e)
			{
				e.printStackTrace();
			}
		}
		
		

	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
