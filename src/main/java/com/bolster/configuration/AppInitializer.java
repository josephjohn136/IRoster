package com.bolster.configuration;

import javax.servlet.Filter;

import org.springframework.web.servlet.support.AbstractAnnotationConfigDispatcherServletInitializer;

public class AppInitializer extends AbstractAnnotationConfigDispatcherServletInitializer{
	@Override
    protected Class<?>[] getRootConfigClasses() {
        return new Class<?>[0];
    }
   
    @Override
    protected Class<?>[] getServletConfigClasses() {
    	return new Class<?>[]{ WebMvcConfig.class };
    }
   
    @Override
    protected String[] getServletMappings() {
        return new String[] { "/" };
    }
     
    @Override
    protected Filter[] getServletFilters() {
        Filter[] singleton = { new CORSFilter() };
        return singleton;
    }
}
