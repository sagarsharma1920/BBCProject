package pages;

import static org.testng.Assert.assertEquals;
import static org.testng.Assert.assertTrue;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import locators.HipHopCategoryPageLocators;

public class HipHopCategoryPageMethods {

	WebDriver driver;
	HipHopCategoryPageLocators hipHopPageLocators;
	WebDriverWait wait;
	
	public HipHopCategoryPageMethods(WebDriver driver){
		this.driver = driver;
		hipHopPageLocators = new HipHopCategoryPageLocators(this.driver);
		wait = new WebDriverWait(this.driver, 10);
	}
	
	public void validateHipHopCategoryHeader(){
		wait.until(ExpectedConditions.visibilityOf(hipHopPageLocators.hipHopCategoryPageHeader));
		boolean hipHopPageHeader = hipHopPageLocators.hipHopCategoryPageHeader.isDisplayed();
		assertTrue(hipHopPageHeader);
	}
	
	public void clickViewAllLink(){
		wait.until(ExpectedConditions.visibilityOf(hipHopPageLocators.viewAllLink.get(0)));
		hipHopPageLocators.viewAllLink.get(0).click();
	}
	
	public void validateSortTypePopular(){
		Select sortType = new Select(hipHopPageLocators.sordDropDown);
		String defaultSelectedValue = sortType.getFirstSelectedOption().getText();
		assertEquals(defaultSelectedValue, "Popular");
	}
}
