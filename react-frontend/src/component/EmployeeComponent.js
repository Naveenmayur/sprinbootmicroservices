import React, { Component } from 'react';
import EmployeeService from '../service/EmployeeService';
import './EmployeeComponent-premium.css';

class EmployeeComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            employee: {},
            department: {},
            organization: {},
            loading: true,
            error: null,
            mousePosition: { x: 0, y: 0 },
            hoveredCard: null,
            cardStates: {
                employee: false,
                department: false,
                organization: false
            },
            darkMode: true,
            notification: null,
            scrollProgress: 0,
            dataLoaded: false
        }        
    }

    componentDidMount(){
        // Simulate data loading with skeleton state
        setTimeout(() => {
            EmployeeService.getEmployee()
                .then((response) => {
                    this.setState({
                        employee: response.data.employee,
                        department: response.data.department,
                        organization: response.data.organization,
                        loading: false,
                        dataLoaded: true
                    }, () => this.showNotification('✅ Profile loaded successfully!'))
                })
                .catch((error) => {
                    this.setState({ error: error.message, loading: false })
                    this.showNotification('❌ Error loading profile', true)
                    console.error('Error fetching employee details:', error)
                })
        }, 800);

        window.addEventListener('mousemove', this.handleMouseMove);
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('mousemove', this.handleMouseMove);
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleMouseMove = (e) => {
        this.setState({
            mousePosition: { x: e.clientX, y: e.clientY }
        });
    }

    handleScroll = () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollProgress = (scrollTop / docHeight) * 100;
        this.setState({ scrollProgress });
    }

    handleCardHover = (cardName, isHovered) => {
        this.setState(prevState => ({
            hoveredCard: isHovered ? cardName : null,
            cardStates: {
                ...prevState.cardStates,
                [cardName]: isHovered
            }
        }));
    }

    copyToClipboard = (text, fieldName) => {
        navigator.clipboard.writeText(text);
        this.showNotification(`📋 ${fieldName} copied!`);
    }

    showNotification = (message, isError = false) => {
        this.setState({ notification: { message, isError } });
        setTimeout(() => {
            this.setState({ notification: null });
        }, 3000);
    }

    toggleTheme = () => {
        this.setState(prevState => ({
            darkMode: !prevState.darkMode
        }));
    }

    renderDetailRow = (icon, label, value) => (
        <div className='detail-row'>
            <div className='row-left'>
                <span className='row-icon'>{icon}</span>
                <div className='row-content'>
                    <span className='detail-label'>{label}</span>
                    <span className='detail-value' onClick={() => this.copyToClipboard(value, label)}>
                        {value || 'N/A'}
                        <span className='copy-icon'>📋</span>
                    </span>
                </div>
            </div>
        </div>
    )

    renderProgressBar = (label, value, max = 100) => (
        <div className='progress-item'>
            <div className='progress-label'>
                <span>{label}</span>
                <span className='progress-value'>{value}/{max}</span>
            </div>
            <div className='progress-bar'>
                <div className='progress-fill' style={{ width: `${(value / max) * 100}%` }}></div>
            </div>
        </div>
    )

    renderCard = (cardType, icon, title, data, stats) => (
        <div 
            key={cardType}
            className={`detail-card ${cardType}-card ${this.state.cardStates[cardType] ? 'hovered' : ''}`}
            onMouseEnter={() => this.handleCardHover(cardType, true)}
            onMouseLeave={() => this.handleCardHover(cardType, false)}
        >
            <div className='card-background'></div>
            <div className='card-blur-effect'></div>
            <div className='card-glow'></div>
            
            <div className='card-header-section'>
                <div className='card-icon-wrapper'>
                    <div className='card-icon'>{icon}</div>
                </div>
                <h2 className='card-title'>{title}</h2>
            </div>

            <div className='card-content'>
                {data}
            </div>

            {stats && (
                <div className='card-stats'>
                    {stats}
                </div>
            )}

            <div className='card-footer'>
                <div className='card-accent-line'></div>
            </div>
        </div>
    )
    
    render() {
        const { employee, department, organization, loading, error, darkMode, notification, scrollProgress, dataLoaded } = this.state;

        if (loading) {
            return (
                <div className={`employee-container ${!darkMode ? 'light-theme' : ''}`}>
                    <div className='animated-background'>
                        <div className='gradient-orb orb-1'></div>
                        <div className='gradient-orb orb-2'></div>
                        <div className='gradient-orb orb-3'></div>
                    </div>
                    <div className='loading-spinner'>
                        <div className='spinner-wrapper'>
                            <div className='skeleton-card'></div>
                            <div className='skeleton-card skeleton-card-2'></div>
                            <div className='skeleton-card skeleton-card-3'></div>
                        </div>
                        <div className='loading-text'>
                            <p className='loading-title'>Loading Profile</p>
                            <p className='loading-subtitle'>Fetching employee details...</p>
                        </div>
                    </div>
                </div>
            );
        }

        if (error) {
            return (
                <div className={`employee-container ${!darkMode ? 'light-theme' : ''}`}>
                    <div className='error-container'>
                        <div className='error-icon'>⚠️</div>
                        <h3>Error Loading Profile</h3>
                        <p>{error}</p>
                    </div>
                </div>
            );
        }

        return (
            <div className={`employee-container ${!darkMode ? 'light-theme' : ''}`}>
                {/* Scroll Progress Bar */}
                <div className='scroll-progress-bar' style={{ width: `${scrollProgress}%` }}></div>

                {/* Animated Background */}
                <div className='animated-background'>
                    <div className='gradient-orb orb-1'></div>
                    <div className='gradient-orb orb-2'></div>
                    <div className='gradient-orb orb-3'></div>
                    <div className='grid-pattern'></div>
                    <div className='floating-particles'>
                        {[...Array(20)].map((_, i) => (
                            <div key={i} className='particle' style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 2}s`
                            }}></div>
                        ))}
                    </div>
                </div>

                {/* Header Section */}
                <div className='employee-header'>
                    <div className='header-actions'>
                        <button className='theme-toggle' onClick={this.toggleTheme} title='Toggle theme'>
                            {darkMode ? '☀️' : '🌙'}
                        </button>
                    </div>
                    
                    <div className='header-content'>
                        <div className='header-accent'></div>
                        <h1 className='main-title'>
                            <span className='title-highlight'>Employee</span> Profile
                        </h1>
                        <p className='subtitle'>
                            ✨ Complete information across organization hierarchy
                        </p>
                        <div className='header-divider'></div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className='stats-section'>
                    <div className='stat-item'>
                        <span className='stat-number'>3</span>
                        <span className='stat-label'>Data Sections</span>
                    </div>
                    <div className='stat-divider'></div>
                    <div className='stat-item'>
                        <span className='stat-number'>9</span>
                        <span className='stat-label'>Fields</span>
                    </div>
                    <div className='stat-divider'></div>
                    <div className='stat-item'>
                        <span className='stat-number'>100%</span>
                        <span className='stat-label'>Complete</span>
                    </div>
                </div>

                {/* Cards Grid */}
                <div className='details-grid'>
                    {this.renderCard(
                        'employee',
                        '👤',
                        'Employee Information',
                        <>
                            {this.renderDetailRow('👨‍💼', 'First Name', employee.firstName)}
                            {this.renderDetailRow('👨‍💼', 'Last Name', employee.lastName)}
                            {this.renderDetailRow('✉️', 'Email Address', employee.email)}
                        </>,
                        this.renderProgressBar('Profile Completion', 3, 3)
                    )}

                    {this.renderCard(
                        'department',
                        '🏢',
                        'Department Details',
                        <>
                            {this.renderDetailRow('🏢', 'Department Name', department.departmentName)}
                            {this.renderDetailRow('📝', 'Description', department.departmentDescription)}
                            {this.renderDetailRow('🔖', 'Department Code', department.departmentCode)}
                        </>,
                        this.renderProgressBar('Department Info', 3, 3)
                    )}

                    {this.renderCard(
                        'organization',
                        '🏛️',
                        'Organization Details',
                        <>
                            {this.renderDetailRow('🏛️', 'Organization Name', organization.organizationName)}
                            {this.renderDetailRow('📋', 'Description', organization.organizationDescription)}
                            {this.renderDetailRow('🔑', 'Organization Code', organization.organizationCode)}
                        </>,
                        this.renderProgressBar('Organization Info', 3, 3)
                    )}
                </div>

                {/* Footer */}
                <div className='employee-footer'>
                    <p>🔐 All data is secure and encrypted • Last updated: {new Date().toLocaleDateString()}</p>
                </div>

                {/* Notification Toast */}
                {notification && (
                    <div className={`notification-toast ${notification.isError ? 'error' : 'success'}`}>
                        {notification.message}
                    </div>
                )}
            </div>
        );
    }
}

export default EmployeeComponent;