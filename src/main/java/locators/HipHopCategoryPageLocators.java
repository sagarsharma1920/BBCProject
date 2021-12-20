package locators;

import java.util.List;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HipHopCategoryPageLocators {

	WebDriver driver;
	
	public HipHopCategoryPageLocators(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(this.driver, this) ;
	}
	
	@FindBy(xpath="//h2[text()='Hip Hop, RnB & Dancehall']")
	public WebElement hipHopCategoryPageHeader;
	
	@FindBy(xpath="//a[@href='/sounds/category/music-hiphoprnbanddancehall-hiphop']")
	public List<WebElement> viewAllLink;
	
	@FindBy(id="sort")
	public WebElement sordDropDown;
}
