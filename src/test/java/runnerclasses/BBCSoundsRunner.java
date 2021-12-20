package runnerclasses;

import org.junit.runner.RunWith;
import org.testng.annotations.Test;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(monochrome = true,
dryRun = false,
features = {"features"},
glue = {"stepdefinition"},
tags = {"@todo"},
plugin = {"pretty", "html:bbcproject/target/reports"})

@Test
public class BBCSoundsRunner extends cucumber.api.testng.AbstractTestNGCucumberTests {

}
