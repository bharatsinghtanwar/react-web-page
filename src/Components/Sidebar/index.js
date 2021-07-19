import React from 'react'
import { SidebarContainer, Icon, ClosedIcon, SidebarWrapper, SidebarLink, SidebarRoute, SidebtnWrap, SidebarManu } from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <ClosedIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarManu>
                    <SidebarLink to="/">
                        Home
                    </SidebarLink>
                    <SidebarLink to="payroll">
                        Payroll
                    </SidebarLink>
                    <SidebarLink to="benefits">
                        Benefits
                    </SidebarLink>
                    <SidebarLink to="pricing">
                        Pricing
                    </SidebarLink>
                    <SidebarLink to="work">
                        Work with us
                    </SidebarLink>
                </SidebarManu>
                <SidebtnWrap>
                    <SidebarRoute to='/signin'>
                        Sign In
                    </SidebarRoute>
                </SidebtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
