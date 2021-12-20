package utilities;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class DriverSetup {

	  public static WebDriver setup(WebDriver driver)
	   {
	       if(driver == null) {
	           driver = new ChromeDriver();
	           driver.manage().window().maximize();
	           driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	           return driver;
	       }else
	          return driver;
	   }
}
