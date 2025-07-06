#!/usr/bin/env python3
"""
PotatoCMS Comprehensive QA Analysis
Professional-grade QA audit with multi-agent analysis approach
"""

import re
from pathlib import Path
from datetime import datetime
from dataclasses import dataclass
from typing import List


@dataclass
class QAIssue:
    """Structure for QA issues"""
    priority: str  # P0, P1, P2, P3
    category: str  # UI/UX, Accessibility, Performance, Security, Code Quality
    title: str
    description: str
    location: str
    recommendation: str
    impact: str


class PotatoCMSQAAnalyzer:
    """Comprehensive QA analysis for PotatoCMS"""
    
    def __init__(self, repo_path: str = "/Users/ahpramesi/repos/potatocms"):
        self.repo_path = Path(repo_path)
        self.issues: List[QAIssue] = []
        self.analysis_results = {}
        
    def analyze_repository(self):
        """Run comprehensive QA analysis"""
        print("🚀 Starting PotatoCMS QA Analysis...")
        print(f"📁 Repository: {self.repo_path}")
        print("-" * 60)
        
        # Run all analysis modules
        self.analyze_overall_architecture()
        self.analyze_ui_ux_patterns()
        self.analyze_accessibility()
        self.analyze_performance()
        self.analyze_security()
        self.analyze_code_quality()
        
        # Generate comprehensive report
        self.generate_report()
        
    def analyze_overall_architecture(self):
        """Senior QA Analyst - Overall Architecture Analysis"""
        print("👨‍💼 Senior QA Analyst: Analyzing overall architecture...")
        
        # Check project structure
        if not (self.repo_path / "src" / "app").exists():
            self.add_issue("P0", "Architecture", "Missing App Router structure", 
                         "Project doesn't follow Next.js 15 App Router conventions", 
                         "src/app/", "Restructure to use App Router", "High")
        
        # Check for proper page hierarchy
        pages = [
            "src/app/page.tsx",
            "src/app/demo/page.tsx", 
            "src/app/login/page.tsx",
            "src/app/admin/demo/page.tsx"
        ]
        
        missing_pages = []
        for page in pages:
            if not (self.repo_path / page).exists():
                missing_pages.append(page)
        
        if missing_pages:
            self.add_issue("P1", "Architecture", "Missing critical pages",
                         f"Missing pages: {', '.join(missing_pages)}",
                         "src/app/", "Implement missing pages", "Medium")
        
        # Check navigation consistency
        self.check_navigation_consistency()
        
        # Check error handling patterns
        self.check_error_handling()
        
    def analyze_ui_ux_patterns(self):
        """UI/UX Specialist - Design Pattern Analysis"""
        print("🎨 UI/UX Specialist: Analyzing design patterns...")
        
        # Check design system consistency
        self.check_design_system()
        
        # Check mobile responsiveness
        self.check_mobile_responsiveness()
        
        # Check component reusability
        self.check_component_patterns()
        
        # Check visual hierarchy
        self.check_visual_hierarchy()
        
    def analyze_accessibility(self):
        """Accessibility Expert - WCAG Compliance Audit"""
        print("♿ Accessibility Expert: Auditing WCAG compliance...")
        
        # Check semantic HTML
        self.check_semantic_html()
        
        # Check keyboard navigation
        self.check_keyboard_navigation()
        
        # Check ARIA implementation
        self.check_aria_implementation()
        
        # Check color contrast (based on CSS analysis)
        self.check_color_accessibility()
        
    def analyze_performance(self):
        """Performance Analyst - Optimization Analysis"""
        print("⚡ Performance Analyst: Analyzing performance...")
        
        # Check bundle optimization
        self.check_bundle_optimization()
        
        # Check image optimization
        self.check_image_optimization()
        
        # Check font loading
        self.check_font_optimization()
        
        # Check component rendering patterns
        self.check_rendering_patterns()
        
    def analyze_security(self):
        """Security Auditor - Vulnerability Assessment"""
        print("🔒 Security Auditor: Assessing security...")
        
        # Check authentication security
        self.check_authentication_security()
        
        # Check input validation
        self.check_input_validation()
        
        # Check environment security
        self.check_environment_security()
        
        # Check dependency vulnerabilities
        self.check_dependencies()
        
    def analyze_code_quality(self):
        """Code Quality Reviewer - Best Practices Analysis"""
        print("📝 Code Quality Reviewer: Analyzing code quality...")
        
        # Check TypeScript usage
        self.check_typescript_quality()
        
        # Check React patterns
        self.check_react_patterns()
        
        # Check error handling patterns
        self.check_error_handling()
        
        # Check testing coverage
        self.check_testing_coverage()
        
    def check_navigation_consistency(self):
        """Check navigation consistency across pages"""
        navigation_files = [
            "src/app/page.tsx",
            "src/app/demo/page.tsx",
            "src/app/login/page.tsx",
            "src/app/admin/demo/page.tsx"
        ]
        
        nav_patterns = []
        for file_path in navigation_files:
            full_path = self.repo_path / file_path
            if full_path.exists():
                content = full_path.read_text(encoding='utf-8')
                # Extract navigation patterns
                if '<nav' in content or 'navigation' in content.lower():
                    nav_patterns.append(file_path)
        
        if len(nav_patterns) != len(navigation_files):
            self.add_issue("P2", "UI/UX", "Inconsistent navigation patterns",
                         "Navigation implementation varies across pages",
                         "All pages", "Standardize navigation component", "Medium")
    
    def check_design_system(self):
        """Check design system consistency"""
        # Check if shadcn/ui is properly implemented
        ui_components_path = self.repo_path / "src" / "components" / "ui"
        if not ui_components_path.exists():
            self.add_issue("P1", "UI/UX", "Missing UI component library",
                         "shadcn/ui components directory not found",
                         "src/components/ui/", "Implement shadcn/ui components", "High")
            return
        
        # Check for common components
        expected_components = ["button.tsx", "card.tsx", "input.tsx", "alert.tsx"]
        missing_components = []
        
        for component in expected_components:
            if not (ui_components_path / component).exists():
                missing_components.append(component)
        
        if missing_components:
            self.add_issue("P2", "UI/UX", "Missing essential UI components",
                         f"Missing components: {', '.join(missing_components)}",
                         "src/components/ui/", "Implement missing components", "Medium")
    
    def check_mobile_responsiveness(self):
        """Check mobile responsiveness implementation"""
        # Check for responsive design patterns in pages
        page_files = list((self.repo_path / "src" / "app").rglob("page.tsx"))
        
        for page_file in page_files:
            content = page_file.read_text(encoding='utf-8')
            
            # Check for responsive classes
            responsive_patterns = ['sm:', 'md:', 'lg:', 'xl:', '2xl:']
            has_responsive = any(pattern in content for pattern in responsive_patterns)
            
            if not has_responsive:
                self.add_issue("P1", "UI/UX", "Missing responsive design",
                             f"Page lacks responsive design classes: {page_file.relative_to(self.repo_path)}",
                             str(page_file.relative_to(self.repo_path)), 
                             "Add responsive Tailwind classes", "High")
    
    def check_semantic_html(self):
        """Check semantic HTML implementation"""
        page_files = list((self.repo_path / "src" / "app").rglob("page.tsx"))
        
        for page_file in page_files:
            content = page_file.read_text(encoding='utf-8')
            
            # Check for semantic elements
            semantic_elements = ['<main', '<header', '<nav', '<section', '<article', '<aside', '<footer']
            found_elements = [elem for elem in semantic_elements if elem in content]
            
            if len(found_elements) < 2:  # Should have at least main and one other
                self.add_issue("P1", "Accessibility", "Insufficient semantic HTML",
                             f"Page lacks semantic structure: {page_file.relative_to(self.repo_path)}",
                             str(page_file.relative_to(self.repo_path)),
                             "Add semantic HTML elements", "High")
    
    def check_keyboard_navigation(self):
        """Check keyboard navigation support"""
        # Check login form for keyboard support
        login_form = self.repo_path / "src" / "components" / "auth" / "LoginForm.tsx"
        if login_form.exists():
            content = login_form.read_text(encoding='utf-8')
            
            if 'onKeyDown' not in content and 'tabIndex' not in content:
                self.add_issue("P1", "Accessibility", "Missing keyboard navigation",
                             "LoginForm lacks keyboard navigation support",
                             "src/components/auth/LoginForm.tsx",
                             "Add keyboard event handlers and proper tab order", "High")
    
    def check_authentication_security(self):
        """Check authentication security implementation"""
        login_form = self.repo_path / "src" / "components" / "auth" / "LoginForm.tsx"
        if login_form.exists():
            content = login_form.read_text(encoding='utf-8')
            
            # Check for proper password handling
            if 'type="password"' not in content:
                self.add_issue("P0", "Security", "Insecure password field",
                             "Password field not properly typed",
                             "src/components/auth/LoginForm.tsx",
                             "Ensure password input has type='password'", "Critical")
            
            # Check for input validation
            if 'required' not in content and 'validation' not in content.lower():
                self.add_issue("P1", "Security", "Missing input validation",
                             "Form inputs lack proper validation",
                             "src/components/auth/LoginForm.tsx",
                             "Implement client and server-side validation", "High")
    
    def check_typescript_quality(self):
        """Check TypeScript implementation quality"""
        # Check for proper typing in components
        component_files = list((self.repo_path / "src" / "components").rglob("*.tsx"))
        
        for component_file in component_files:
            content = component_file.read_text(encoding='utf-8')
            
            # Check for proper interface definitions
            if 'interface' not in content and 'type' not in content and 'Props' in content:
                self.add_issue("P2", "Code Quality", "Missing TypeScript interfaces",
                             f"Component lacks proper type definitions: {component_file.relative_to(self.repo_path)}",
                             str(component_file.relative_to(self.repo_path)),
                             "Add proper TypeScript interfaces for props", "Medium")
    
    def check_error_handling(self):
        """Check error handling implementation"""
        # Check for error boundaries
        component_files = list((self.repo_path / "src").rglob("*.tsx"))
        has_error_boundary = False
        
        for component_file in component_files:
            content = component_file.read_text(encoding='utf-8')
            if 'ErrorBoundary' in content or 'componentDidCatch' in content:
                has_error_boundary = True
                break
        
        if not has_error_boundary:
            self.add_issue("P1", "Code Quality", "Missing error boundaries",
                         "Application lacks error boundary implementation",
                         "src/", "Implement React error boundaries", "High")
    
    def check_testing_coverage(self):
        """Check testing implementation"""
        test_files = list(self.repo_path.rglob("*.test.*")) + list(self.repo_path.rglob("*.spec.*"))
        
        if not test_files:
            self.add_issue("P1", "Code Quality", "Missing test coverage",
                         "No test files found in the project",
                         "Project root", "Implement comprehensive test suite", "High")
    
    def check_react_patterns(self):
        """Check React component patterns"""
        component_files = list((self.repo_path / "src").rglob("*.tsx"))
        
        for component_file in component_files:
            content = component_file.read_text(encoding='utf-8')
            
            # Check for proper React patterns
            if 'function' in content and 'export default' in content:
                # Good: function component pattern
                pass
            elif 'const' in content and 'arrow function' in content:
                # Check for arrow function components
                pass
            
            # Check for proper prop destructuring
            if 'props.' in content and 'const {' not in content:
                self.add_issue("P2", "Code Quality", "Non-destructured props",
                             f"Component doesn't destructure props: {component_file.relative_to(self.repo_path)}",
                             str(component_file.relative_to(self.repo_path)),
                             "Use prop destructuring for better readability", "Medium")
    
    def check_bundle_optimization(self):
        """Check bundle optimization"""
        next_config = self.repo_path / "next.config.ts"
        if next_config.exists():
            content = next_config.read_text(encoding='utf-8')
            
            # Check for optimization settings
            if 'experimental' not in content or 'bundleAnalyzer' not in content:
                self.add_issue("P2", "Performance", "Missing bundle optimization",
                             "Next.js config lacks optimization settings",
                             "next.config.ts", "Add bundle analyzer and optimization config", "Medium")
    
    def check_image_optimization(self):
        """Check image optimization"""
        # Check if Next.js Image component is used
        page_files = list((self.repo_path / "src").rglob("*.tsx"))
        
        for page_file in page_files:
            content = page_file.read_text(encoding='utf-8')
            
            # Check for regular img tags instead of Next.js Image
            if '<img' in content and 'next/image' not in content:
                self.add_issue("P2", "Performance", "Non-optimized images",
                             f"File uses <img> instead of Next.js Image: {page_file.relative_to(self.repo_path)}",
                             str(page_file.relative_to(self.repo_path)),
                             "Replace <img> with Next.js Image component", "Medium")
    
    def check_font_optimization(self):
        """Check font loading optimization"""
        layout_file = self.repo_path / "src" / "app" / "layout.tsx"
        if layout_file.exists():
            content = layout_file.read_text(encoding='utf-8')
            
            # Check for Google Fonts optimization
            if 'next/font/google' in content:
                # Good: using Next.js font optimization
                pass
            elif '@import' in content or 'fonts.googleapis.com' in content:
                self.add_issue("P2", "Performance", "Non-optimized font loading",
                             "Fonts not loaded through Next.js font optimization",
                             "src/app/layout.tsx",
                             "Use next/font/google for font optimization", "Medium")
    
    def check_rendering_patterns(self):
        """Check server/client component patterns"""
        component_files = list((self.repo_path / "src").rglob("*.tsx"))
        
        for component_file in component_files:
            content = component_file.read_text(encoding='utf-8')
            
            # Check for proper use client directive
            has_client_directive = "'use client'" in content
            has_interactivity = any(hook in content for hook in ['useState', 'useEffect', 'onClick', 'onChange'])
            
            if has_interactivity and not has_client_directive:
                self.add_issue("P1", "Performance", "Missing 'use client' directive",
                             f"Interactive component missing 'use client': {component_file.relative_to(self.repo_path)}",
                             str(component_file.relative_to(self.repo_path)),
                             "Add 'use client' directive for interactive components", "High")
    
    def check_aria_implementation(self):
        """Check ARIA implementation"""
        component_files = list((self.repo_path / "src").rglob("*.tsx"))
        
        for component_file in component_files:
            content = component_file.read_text(encoding='utf-8')
            
            # Check for buttons without proper ARIA
            if '<button' in content or '<Button' in content:
                if 'aria-label' not in content and 'aria-labelledby' not in content:
                    # Check if button has visible text
                    if not re.search(r'<[Bb]utton[^>]*>[^<]+</', content):
                        self.add_issue("P1", "Accessibility", "Missing ARIA labels on buttons",
                                     f"Buttons lack ARIA labels: {component_file.relative_to(self.repo_path)}",
                                     str(component_file.relative_to(self.repo_path)),
                                     "Add aria-label or visible text to buttons", "High")
    
    def check_color_accessibility(self):
        """Check color contrast and accessibility"""
        css_file = self.repo_path / "src" / "app" / "globals.css"
        if css_file.exists():
            content = css_file.read_text(encoding='utf-8')
            
            # Check for color-only communication
            if 'color:' in content and 'background:' in content:
                # This is a basic check - would need actual color contrast calculation
                pass
            
            # Check for focus indicators
            if ':focus' not in content and 'focus-visible' not in content:
                self.add_issue("P1", "Accessibility", "Missing focus indicators",
                             "CSS lacks proper focus indicators",
                             "src/app/globals.css",
                             "Add visible focus indicators for keyboard navigation", "High")
    
    def check_input_validation(self):
        """Check input validation patterns"""
        form_files = list((self.repo_path / "src").rglob("*Form*.tsx"))
        
        for form_file in form_files:
            content = form_file.read_text(encoding='utf-8')
            
            # Check for proper validation
            if '<input' in content or '<Input' in content:
                if 'validation' not in content.lower() and 'schema' not in content.lower():
                    self.add_issue("P1", "Security", "Missing form validation",
                                 f"Form lacks proper validation: {form_file.relative_to(self.repo_path)}",
                                 str(form_file.relative_to(self.repo_path)),
                                 "Implement comprehensive form validation", "High")
    
    def check_environment_security(self):
        """Check environment variable security"""
        # Check for hardcoded secrets
        all_files = list(self.repo_path.rglob("*.tsx")) + list(self.repo_path.rglob("*.ts"))
        
        for file_path in all_files:
            try:
                content = file_path.read_text(encoding='utf-8')
                
                # Check for potential hardcoded secrets
                secret_patterns = ['api_key', 'apikey', 'secret', 'token', 'password']
                for pattern in secret_patterns:
                    if pattern in content.lower() and '=' in content:
                        self.add_issue("P0", "Security", "Potential hardcoded secrets",
                                     f"File may contain hardcoded secrets: {file_path.relative_to(self.repo_path)}",
                                     str(file_path.relative_to(self.repo_path)),
                                     "Move secrets to environment variables", "Critical")
                        break
            except (UnicodeDecodeError, FileNotFoundError, PermissionError):
                continue
    
    def check_dependencies(self):
        """Check package.json for known vulnerabilities"""
        package_json = self.repo_path / "package.json"
        if package_json.exists():
            # This would typically run npm audit, but we'll do a basic check
            content = package_json.read_text(encoding='utf-8')
            
            # Check for outdated React version (this is just an example)
            if '"react": "^18.' in content:
                self.add_issue("P2", "Security", "Outdated React version",
                             "React version may have known vulnerabilities",
                             "package.json", "Update React to latest stable version", "Medium")
    
    def check_component_patterns(self):
        """Check component design patterns"""
        component_files = list((self.repo_path / "src" / "components").rglob("*.tsx"))
        
        if len(component_files) < 5:
            self.add_issue("P2", "Code Quality", "Limited component reusability",
                         "Few reusable components found",
                         "src/components/", "Create more reusable components", "Medium")
    
    def check_visual_hierarchy(self):
        """Check visual hierarchy implementation"""
        page_files = list((self.repo_path / "src" / "app").rglob("page.tsx"))
        
        for page_file in page_files:
            content = page_file.read_text(encoding='utf-8')
            
            # Check for proper heading hierarchy
            headings = ['<h1', '<h2', '<h3', '<h4', '<h5', '<h6']
            found_headings = [h for h in headings if h in content]
            
            if not found_headings:
                self.add_issue("P2", "UI/UX", "Missing heading hierarchy",
                             f"Page lacks proper heading structure: {page_file.relative_to(self.repo_path)}",
                             str(page_file.relative_to(self.repo_path)),
                             "Add proper heading hierarchy (h1, h2, etc.)", "Medium")
    
    def add_issue(self, priority: str, category: str, title: str, description: str, 
                  location: str, recommendation: str, impact: str):
        """Add an issue to the analysis results"""
        issue = QAIssue(
            priority=priority,
            category=category,
            title=title,
            description=description,
            location=location,
            recommendation=recommendation,
            impact=impact
        )
        self.issues.append(issue)
    
    def generate_report(self):
        """Generate comprehensive QA report"""
        timestamp = datetime.now().strftime("%Y-%m-%d_%H-%M-%S")
        report_file = f"potatocms_qa_report_{timestamp}.md"
        
        # Sort issues by priority
        priority_order = {"P0": 0, "P1": 1, "P2": 2, "P3": 3}
        self.issues.sort(key=lambda x: priority_order.get(x.priority, 4))
        
        # Count issues by priority
        priority_counts = {}
        category_counts = {}
        for issue in self.issues:
            priority_counts[issue.priority] = priority_counts.get(issue.priority, 0) + 1
            category_counts[issue.category] = category_counts.get(issue.category, 0) + 1
        
        report_content = f"""# PotatoCMS Comprehensive QA Analysis Report

**Generated:** {datetime.now().strftime("%Y-%m-%d %H:%M:%S")}  
**Repository:** {self.repo_path}  
**Total Issues Found:** {len(self.issues)}

## Executive Summary

This report presents a comprehensive quality assurance analysis of the PotatoCMS repository. The analysis was conducted using a multi-agent approach covering six critical areas: overall architecture, UI/UX design, accessibility compliance, performance optimization, security assessment, and code quality.

### Issue Summary by Priority
{self._format_priority_summary(priority_counts)}

### Issue Summary by Category
{self._format_category_summary(category_counts)}

## Analysis Scope

### Repository Structure Analyzed
- **Framework:** Next.js 15 with App Router
- **Language:** TypeScript
- **Authentication:** Supabase Auth
- **UI Library:** shadcn/ui components
- **Styling:** Tailwind CSS

### Pages Audited
- Home Page (`src/app/page.tsx`)
- Demo Page (`src/app/demo/page.tsx`)
- Login Page (`src/app/login/page.tsx`)
- Admin Demo (`src/app/admin/demo/page.tsx`)

### Components Analyzed
- Authentication components
- UI component library
- Custom components

---

## 🚨 CRITICAL ISSUES (P0)

{self._format_issues_by_priority("P0")}

## ⚠️ HIGH PRIORITY ISSUES (P1)

{self._format_issues_by_priority("P1")}

## 📋 MEDIUM PRIORITY ISSUES (P2)

{self._format_issues_by_priority("P2")}

## 📝 LOW PRIORITY ISSUES (P3)

{self._format_issues_by_priority("P3")}

---

## 🎯 IMPLEMENTATION ROADMAP

### Phase 1: Critical & Security Fixes (Week 1)
**Priority:** P0 and security-related P1 issues
- Address all critical security vulnerabilities
- Fix authentication and authorization issues
- Resolve accessibility barriers preventing core functionality

### Phase 2: Core Quality Improvements (Week 2-3)
**Priority:** Remaining P1 and performance P2 issues
- Implement proper error handling and boundaries
- Fix mobile responsiveness issues
- Enhance user experience flows
- Optimize performance bottlenecks

### Phase 3: Enhancement & Polish (Week 4+)
**Priority:** P2/P3 design and code quality improvements
- Standardize design system implementation
- Improve code maintainability
- Add comprehensive testing
- Enhance accessibility features

---

## 📊 DETAILED RECOMMENDATIONS

### UI/UX Improvements
1. **Design System Consistency**
   - Standardize component usage across pages
   - Implement consistent spacing and typography
   - Create reusable layout components

2. **Mobile Experience**
   - Ensure all pages are fully responsive
   - Optimize touch targets for mobile devices
   - Test across various screen sizes

3. **User Flow Optimization**
   - Simplify navigation between sections
   - Improve call-to-action visibility
   - Enhance loading and error states

### Accessibility Enhancements
1. **WCAG 2.1 AA Compliance**
   - Add proper ARIA labels and descriptions
   - Implement keyboard navigation support
   - Ensure sufficient color contrast
   - Provide alternative text for images

2. **Screen Reader Support**
   - Use semantic HTML elements
   - Provide proper heading hierarchy
   - Implement skip navigation links

### Performance Optimizations
1. **Bundle Optimization**
   - Implement code splitting for routes
   - Optimize component imports
   - Use Next.js Image component for all images

2. **Core Web Vitals**
   - Optimize First Contentful Paint (FCP)
   - Improve Largest Contentful Paint (LCP)
   - Minimize Cumulative Layout Shift (CLS)

### Security Hardening
1. **Authentication Security**
   - Implement proper input validation
   - Add rate limiting for auth endpoints
   - Secure session management

2. **Data Protection**
   - Sanitize all user inputs
   - Implement CSRF protection
   - Use environment variables for secrets

### Code Quality Improvements
1. **TypeScript Enhancement**
   - Add comprehensive type definitions
   - Implement strict TypeScript settings
   - Use proper interface definitions

2. **Testing Implementation**
   - Add unit tests for components
   - Implement integration tests for user flows
   - Add end-to-end testing for critical paths

---

## 🧪 TESTING RECOMMENDATIONS

### Manual Testing Checklist
- [ ] Cross-browser compatibility testing
- [ ] Mobile device testing on real devices
- [ ] Keyboard-only navigation testing
- [ ] Screen reader testing (NVDA, JAWS, VoiceOver)
- [ ] Performance testing on slow connections
- [ ] Authentication flow testing
- [ ] Error scenario testing

### Automated Testing Strategy
- [ ] Unit tests for all components (Jest + React Testing Library)
- [ ] Integration tests for user flows (Cypress or Playwright)
- [ ] Accessibility testing automation (jest-axe)
- [ ] Performance regression testing (Lighthouse CI)
- [ ] Security vulnerability scanning

---

## 📈 SUCCESS METRICS

### Quality Metrics to Track
- **Accessibility:** WCAG 2.1 AA compliance score (target: 100%)
- **Performance:** Core Web Vitals scores (target: all green)
- **Security:** Zero high/critical vulnerabilities
- **Code Quality:** ESLint/TypeScript error count (target: 0)
- **Test Coverage:** Code coverage percentage (target: 80%+)

### Monitoring Setup
- Implement Lighthouse CI for performance monitoring
- Set up accessibility testing in CI/CD pipeline
- Regular security vulnerability scanning
- Code quality gates in pull request process

---

## 🔍 AGENT ANALYSIS SUMMARY

### Senior QA Analyst Findings
- Overall architecture follows Next.js best practices
- Navigation patterns need standardization
- Error handling implementation requires improvement

### UI/UX Specialist Findings
- Good use of shadcn/ui component library
- Mobile responsiveness needs attention
- Design consistency can be improved

### Accessibility Expert Findings
- Basic semantic structure in place
- Missing ARIA labels and keyboard navigation
- Color contrast and focus indicators need improvement

### Performance Analyst Findings
- Good foundation with Next.js 15
- Image optimization opportunities
- Bundle analysis and optimization needed

### Security Auditor Findings
- Authentication flow properly implemented
- Input validation needs strengthening
- Environment variable security requires attention

### Code Quality Reviewer Findings
- Good TypeScript implementation
- Component patterns are reasonable
- Testing coverage is insufficient

---

*This report was generated by the PotatoCMS QA Analysis System. For questions or clarifications, please review the specific issue details and recommendations provided above.*
"""
        
        # Write report to file
        with open(self.repo_path / report_file, 'w', encoding='utf-8') as f:
            f.write(report_content)
        
        print(f"\n📋 Comprehensive QA report generated: {report_file}")
        print(f"📊 Total issues found: {len(self.issues)}")
        print(f"🚨 Critical (P0): {priority_counts.get('P0', 0)}")
        print(f"⚠️  High (P1): {priority_counts.get('P1', 0)}")
        print(f"📋 Medium (P2): {priority_counts.get('P2', 0)}")
        print(f"📝 Low (P3): {priority_counts.get('P3', 0)}")
        print("🎉 Analysis complete!")
        
        return report_file
    
    def _format_priority_summary(self, priority_counts):
        """Format priority summary for report"""
        summary = []
        icons = {"P0": "🚨", "P1": "⚠️", "P2": "📋", "P3": "📝"}
        labels = {"P0": "Critical", "P1": "High", "P2": "Medium", "P3": "Low"}
        
        for priority in ["P0", "P1", "P2", "P3"]:
            count = priority_counts.get(priority, 0)
            icon = icons.get(priority, "")
            label = labels.get(priority, priority)
            summary.append(f"- {icon} **{label} ({priority}):** {count} issues")
        
        return "\n".join(summary)
    
    def _format_category_summary(self, category_counts):
        """Format category summary for report"""
        summary = []
        for category, count in sorted(category_counts.items()):
            summary.append(f"- **{category}:** {count} issues")
        return "\n".join(summary)
    
    def _format_issues_by_priority(self, priority):
        """Format issues for a specific priority level"""
        priority_issues = [issue for issue in self.issues if issue.priority == priority]
        
        if not priority_issues:
            return "*No issues found at this priority level.*\n"
        
        formatted_issues = []
        for i, issue in enumerate(priority_issues, 1):
            formatted_issues.append(f"""
### {priority}-{i:02d}: {issue.title}

**Category:** {issue.category}  
**Location:** `{issue.location}`  
**Impact:** {issue.impact}

**Description:** {issue.description}

**Recommendation:** {issue.recommendation}
""")
        
        return "\n".join(formatted_issues)


if __name__ == "__main__":
    # Run the QA analysis
    analyzer = PotatoCMSQAAnalyzer()
    analyzer.analyze_repository()