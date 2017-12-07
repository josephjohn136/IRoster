package com.bolster.tenant;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

@Component
public class TenantInterceptor extends HandlerInterceptorAdapter {

	public static final String TENANT_HEADER = "X-TenantID";

	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
			throws Exception {

		String tenant = request.getHeader(TENANT_HEADER);

		if (StringUtils.isEmpty(tenant)) {
			TenantContext.setCurrentTenant(TenantContext.DEFAULT_TENANT);

		} else {
			TenantContext.setCurrentTenant(tenant);
		}
		
		System.out.println("---- > current tenant is " + TenantContext.getCurrentTenant());

		return true;
	}
}
