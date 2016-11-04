package user;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;

import org.json.JSONException;
import org.json.JSONObject;

import com.mysql.jdbc.ResultSet;

public class registerclass {
	public JSONObject register(String userName,String pass,String fullName) throws JSONException{   
		JSONObject result=new JSONObject();	

		try{
			Class.forName("com.mysql.jdbc.Driver");
			Connection con =DriverManager.getConnection("jdbc:mysql://localhost:3306/Trello","root","root");
			Statement statement = con.createStatement();
			String query= "Insert into register(userName,pass,fullName) values('"+ userName + "','" + pass + "','" + fullName +"')";
			
			statement.execute(query);
			result.put("Status" , "1");
					
		}
		catch(Exception e){
			JSONObject error= new JSONObject();
			error.put("Status" , "0");
			error.put("Message",e.getMessage());
			return error;
			
			
		}
		return result;
		}
	public JSONObject login(String userName,String pass)throws JSONException{
		JSONObject result = new JSONObject();
		try{
			Class.forName("com.mysql.jdbc.Driver");
			Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/Trello","root","root");
			Statement statement = con.createStatement();
			//SELECT userName FROM register where userName='kiruthika' and pass='111';
			String query="SELECT userName FROM register where userName='" + userName +"' AND pass='" + pass +"'";
			statement.executeQuery(query);
			ResultSet rs = (ResultSet) statement.executeQuery(query);
			if(rs.next())
			{
			 if(rs.equals(userName)||rs.equals(pass))
			 {
				result.put("userName",rs.getString("userName")); 
				
				//result.put("Status", "1");
			}
				
		
			 		}
		}
			
			//sresult.put("userName",rs.getString(2)); 
		
		catch(Exception e){
			JSONObject error= new JSONObject();
			error.put("Status" , "0");
			error.put("Message",e.getMessage());
			
			return error;
					
		}
		
		return result;
		}

}
