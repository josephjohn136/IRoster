package com.bolster.tenant.hibernate;

import org.hibernate.context.spi.CurrentTenantIdentifierResolver;
import org.springframework.stereotype.Component;

import com.bolster.tenant.TenantContext;

@Component
public class CurrentTenantIdentifierResolverImpl implements CurrentTenantIdentifierResolver {

	@Override
	public String resolveCurrentTenantIdentifier() {
		return TenantContext.getCurrentTenant();
	}

	@Override
	public boolean validateExistingCurrentSessions() {
		return true;
	}
}
