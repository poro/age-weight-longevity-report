import { useState } from 'react';
import './App.css';

// Define the sections of our report
const sections = [
  { id: 'executive-summary', title: 'Executive Summary' },
  { id: 'introduction', title: 'Introduction' },
  { id: 'key-findings', title: 'Key Findings' },
  { id: 'formulas', title: 'Formulas & Models' },
  { id: 'cases', title: 'Documented Cases' },
  { id: 'implications', title: 'Practical Implications' },
  { id: 'conclusion', title: 'Conclusion' },
  { id: 'references', title: 'References' }
];

function App() {
  const [activeSection, setActiveSection] = useState('executive-summary');

  return (
    <div className="app-container">
      <header className="header">
        <h1>Age, Weight, and Longevity: Beyond BMI</h1>
        <p className="subtitle">An Interactive Research Report</p>
      </header>

      <div className="main-content">
        <nav className="sidebar">
          <ul>
            {sections.map(section => (
              <li 
                key={section.id} 
                className={activeSection === section.id ? 'active' : ''}
                onClick={() => setActiveSection(section.id)}
              >
                {section.title}
              </li>
            ))}
          </ul>
        </nav>

        <main className="content">
          {activeSection === 'executive-summary' && (
            <section id="executive-summary">
              <h2>Executive Summary</h2>
              <p>This report investigates the relationship between age, weight, body composition, and longevity, with a specific focus on muscle mass rather than BMI. The research reveals that body composition—particularly the ratio of muscle mass to total body weight—is a significantly better predictor of longevity than simple weight or BMI measurements.</p>
              <p>Notably, studies consistently show that higher muscle mass is associated with lower mortality risk in older adults, and that being overweight in one's 70s (by traditional BMI standards) may actually be associated with increased longevity when adequate muscle mass is maintained.</p>
              <div className="image-container">
                <img src="/images/predictors_comparison.png" alt="Comparing Different Predictors of Longevity" className="report-image" />
                <p className="image-caption">Figure 1: Relative predictive strength of different body composition metrics for longevity in older adults.</p>
              </div>
            </section>
          )}

          {activeSection === 'introduction' && (
            <section id="introduction">
              <h2>Introduction</h2>
              <p>The question of how weight affects longevity at different ages is complex and cannot be adequately addressed through simple BMI calculations. While conventional wisdom has long associated lower weight with better health outcomes, emerging research suggests that body composition—specifically the proportion of muscle to fat—plays a far more significant role in determining longevity, especially in older adults.</p>
              <p>This report synthesizes findings from major scientific studies, documented cases, and predictive models to provide a comprehensive understanding of how age, weight, height, and body composition interact to influence longevity. Special attention is given to muscle mass as a predictor of longevity, addressing the specific request to look beyond BMI and consider muscle composition.</p>
              <div className="image-container">
                <img src="/images/age_body_composition.png" alt="Age-Related Changes in Body Composition" className="report-image" />
                <p className="image-caption">Figure 2: Age-related changes in muscle mass and fat mass throughout the lifespan.</p>
              </div>
            </section>
          )}

          {activeSection === 'key-findings' && (
            <section id="key-findings">
              <h2>Key Findings from Scientific Research</h2>
              
              <h3>The 90+ Study: Overweight in 70s Associated with Longer Life</h3>
              <p>The 90+ Study, one of the largest studies of the oldest-old in the world with more than 1,600 participants, has produced several groundbreaking findings regarding weight and longevity:</p>
              <ul>
                <li>People who were overweight in their 70s lived longer than normal or underweight people did</li>
                <li>Moderate alcohol and coffee consumption was associated with increased longevity</li>
                <li>Over 40% of people aged 90+ suffer from dementia, with almost 80% experiencing some form of disability</li>
              </ul>
              <p>This study suggests that traditional weight guidelines may not apply to older adults, and that maintaining some additional weight in later years could be protective.</p>

              <h3>Muscle Mass as a Mortality Predictor</h3>
              <p>Multiple studies have demonstrated that muscle mass is a stronger predictor of mortality than BMI:</p>
              
              <h4>National Health and Nutrition Examination Survey (NHANES) Study (Srikanthan & Karlamangla, 2014):</h4>
              <ul>
                <li>Analyzed data from 3,659 older adults (men ≥55 years, women ≥65 years)</li>
                <li>Found that all-cause mortality was significantly lower in the fourth quartile of muscle mass index compared to the first quartile</li>
                <li>Adjusted risk ratio: 0.81 (95% confidence interval 0.71–0.91)</li>
                <li>Adjusted hazard ratio: 0.80 (95% confidence interval 0.66–0.97)</li>
                <li>Conclusion: "The greater your muscle mass, the lower your risk of death"</li>
              </ul>

              <div className="image-container">
                <img src="/images/muscle_mass_mortality.png" alt="Muscle Mass Index and Mortality Risk" className="report-image" />
                <p className="image-caption">Figure 3: Relationship between muscle mass index quartiles and mortality risk in older adults.</p>
              </div>

              <h4>Project of Longevity and Aging in Dujiangyan (PLAD) Study (Wang et al., 2019):</h4>
              <ul>
                <li>Analyzed 738 community-dwelling people aged ≥90 years</li>
                <li>Found that low muscle mass was associated with a higher risk of death (hazard ratio 1.54) in women</li>
                <li>Mean muscle mass index (SMI) was 6.11±0.53 kg/m² in men and 4.00±0.63 kg/m² in women</li>
                <li>Disability in activities of daily living and cognitive impairment were also associated with increased mortality</li>
              </ul>

              <h4>Associations of Muscle Mass and Strength with All-Cause Mortality (Li et al., 2018):</h4>
              <ul>
                <li>Analyzed 4,449 participants aged 50+ years from NHANES</li>
                <li>Found that low muscle strength was independently associated with elevated risk of all-cause mortality, regardless of muscle mass</li>
                <li>The prevalence of low muscle mass was 23.1% defined by appendicular lean mass (ALM) and 17.0% defined by ALM/BMI</li>
                <li>The prevalence of low muscle strength was 19.4%</li>
                <li>All-cause mortality was significantly higher among individuals with low muscle strength, whether they had low muscle mass or not</li>
              </ul>

              <p>These studies consistently demonstrate that muscle mass and strength are more important predictors of longevity than total body weight or BMI, especially in older adults.</p>
            </section>
          )}

          {activeSection === 'formulas' && (
            <section id="formulas">
              <h2>Formulas and Models for Estimating Muscle Mass and Predicting Longevity</h2>
              <p>Several validated formulas exist for estimating muscle mass and its relationship to longevity:</p>

              <div className="image-container">
                <img src="/images/muscle_mass_formula.png" alt="Components of the Appendicular Skeletal Muscle Mass Formula" className="report-image" />
                <p className="image-caption">Figure 4: Components and their relative weights in the Appendicular Skeletal Muscle Mass formula.</p>
              </div>

              <h3>1. Appendicular Skeletal Muscle Mass (ASM) Formula</h3>
              <p>The Asian Working Group of Sarcopenia (AWGS) recommends this formula for calculating appendicular skeletal muscle mass:</p>
              <div className="formula">
                <p>ASM (kg) = 0.193 × weight (kg) + 0.107 × height (cm) – 4.157 × gender (male = 1, female = 2) – 0.037 × age (year) – 2.631</p>
              </div>
              <p>This formula allows for estimation of muscle mass without specialized imaging equipment and has been validated for predicting 3-year mortality risk (HR = 2.49) and hospital readmission (HR = 1.81) in elderly patients.</p>

              <h3>2. Skeletal Muscle Index (SMI) Calculation</h3>
              <p>Skeletal Muscle Index is calculated as:</p>
              <div className="formula">
                <p>SMI (kg/m²) = ASM / height² (m²)</p>
              </div>
              <p>Where ASM is the appendicular skeletal muscle mass. This index is used to standardize muscle mass relative to body size.</p>

              <h3>3. L3 Skeletal Muscle Mass Index Formula</h3>
              <p>For more precise estimation using anthropometric parameters:</p>
              <div className="formula">
                <p>SMI.pre = 0.540 × weight (kg) – 0.559 × height (cm) – 13.877 × sex (male = 1, female = 2) + 123.583</p>
              </div>
              <p>This formula was developed to estimate the L3 skeletal muscle index based on CT scans but using only basic anthropometric measurements.</p>

              <h3>4. Bioelectrical Impedance Analysis (BIA) Method</h3>
              <p>The bioelectrical impedance method relies on the relationship between body composition and body water content. Muscle allows electrical current to pass more easily than fat due to its higher water content. The formula developed by Janssen et al. is:</p>
              <div className="formula">
                <p>Skeletal muscle mass (kg) = [(height²/resistance × 0.401) + (gender × 3.825) + (age × -0.071)] + 5.102</p>
              </div>
              <p>Where height is in cm, resistance in ohms, gender is 1 for men and 0 for women, and age is in years.</p>
            </section>
          )}

          {activeSection === 'cases' && (
            <section id="cases">
              <h2>Documented Cases and Examples</h2>
              <p>While specific documented cases of very elderly individuals (90+ years) who weigh over 100 kilos are rare in the scientific literature, the research does provide some relevant insights:</p>

              <h3>Jon Brower Minnoch</h3>
              <p>While not an example of extreme longevity (he lived to 41 years), his case is notable as he suffered from severe obesity due to metabolic and genetic factors, was hospitalized multiple times, and experienced various health issues related to his weight.</p>

              <h3>The 90+ Study Participants</h3>
              <p>Several participants in the 90+ Study were still thriving at ages 99-100+, including:</p>
              <ul>
                <li><strong>Helen Weil:</strong> At 99, she maintained an active lifestyle including chair exercises</li>
                <li><strong>Lou Tirado:</strong> At 100, he was technologically savvy, using iPhones and Facebook</li>
                <li><strong>Ruthy Stahl:</strong> At 102, though experiencing memory issues, maintained a positive outlook</li>
              </ul>
              <p>These cases illustrate that while extreme weight in very old age is uncommon, maintaining functional capacity and muscle strength appears to be more important for longevity than weight alone.</p>

              <div className="image-container">
                <img src="/images/longevity_factors.png" alt="Factors Influencing Longevity in Older Adults" className="report-image" />
                <p className="image-caption">Figure 5: Relative importance of different factors influencing longevity in older adults.</p>
              </div>
            </section>
          )}

          {activeSection === 'implications' && (
            <section id="implications">
              <h2>Practical Implications for Personal Health</h2>
              <p>Based on the scientific evidence, several practical implications emerge for personal health planning:</p>

              <h3>1. Focus on body composition rather than weight or BMI alone</h3>
              <ul>
                <li>Regular assessment of muscle mass may be more valuable than simply tracking weight</li>
                <li>Bioelectrical impedance analysis (BIA) scales can provide estimates of muscle and fat percentages</li>
              </ul>

              <h3>2. Prioritize muscle preservation and development</h3>
              <ul>
                <li>Resistance training becomes increasingly important with age</li>
                <li>Protein intake should be adequate to support muscle maintenance</li>
                <li>Even in older adults, muscle-building activities provide significant benefits</li>
              </ul>

              <h3>3. Consider that optimal weight may increase with age</h3>
              <ul>
                <li>Being slightly overweight (by BMI standards) in older age may be protective</li>
                <li>Extreme weight loss in older adults should be approached cautiously</li>
              </ul>

              <h3>4. Monitor functional strength as a key health indicator</h3>
              <ul>
                <li>Grip strength and lower body strength are strong predictors of longevity</li>
                <li>Functional capacity may matter more than aesthetic goals</li>
              </ul>

              <h3>5. Recognize that body composition needs change throughout life</h3>
              <ul>
                <li>What's optimal at 30 may not be optimal at 70</li>
                <li>Adaptations in diet and exercise should reflect changing body composition needs</li>
              </ul>
            </section>
          )}

          {activeSection === 'conclusion' && (
            <section id="conclusion">
              <h2>Conclusion</h2>
              <p>The relationship between age, weight, and longevity is far more nuanced than simple BMI calculations suggest. The scientific evidence consistently demonstrates that body composition—particularly muscle mass—is a stronger predictor of longevity than total body weight, especially in older adults.</p>
              <p>For personal health planning, this suggests a shift in focus from weight management to body composition management, with special attention to preserving and developing muscle mass throughout life. The formulas and models presented in this report provide tools for estimating muscle mass and its relationship to longevity, offering a more sophisticated approach to health assessment than traditional BMI measurements.</p>
              <p>While specific documented cases of very elderly individuals with high body weight are limited, the overall research suggests that maintaining functional capacity through adequate muscle mass is more important for longevity than achieving a particular weight target.</p>
            </section>
          )}

          {activeSection === 'references' && (
            <section id="references">
              <h2>References</h2>
              <ol className="references-list">
                <li>The 90+ Study - UCI MIND. <a href="https://mind.uci.edu/research-studies/90plus-study/" target="_blank" rel="noopener noreferrer">https://mind.uci.edu/research-studies/90plus-study/</a></li>
                <li>Srikanthan, P., & Karlamangla, A. S. (2014). Muscle Mass Index as a Predictor of Longevity in Older-Adults. The American Journal of Medicine, 127(6), 547-553. <a href="https://www.amjmed.com/article/S0002-9343(14)00138-7/pdf" target="_blank" rel="noopener noreferrer">https://www.amjmed.com/article/S0002-9343(14)00138-7/pdf</a></li>
                <li>Wang, H., Hai, S., Liu, Y., Liu, Y., & Dong, B. (2019). Skeletal Muscle Mass as a Mortality Predictor among Nonagenarians and Centenarians: A Prospective Cohort Study. Scientific Reports, 9, 2420. <a href="https://www.nature.com/articles/s41598-019-38893-0" target="_blank" rel="noopener noreferrer">https://www.nature.com/articles/s41598-019-38893-0</a></li>
                <li>Li, R., Xia, J., Zhang, X., Gathirua-Mwangi, W. G., Guo, J., Li, Y., McKenzie, S., & Song, Y. (2018). Associations of Muscle Mass and Strength with All-Cause Mortality among US Older Adults. Medicine and Science in Sports and Exercise, 50(3), 458-467. <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5820209/" target="_blank" rel="noopener noreferrer">https://pmc.ncbi.nlm.nih.gov/articles/PMC5820209/</a></li>
                <li>Ji, W., Zhao, Y., He, Y., Cui, J., & Li, W. (2022). Development of Formulas for Calculating L3 Skeletal Muscle Mass Index and Visceral Fat Area Based on Anthropometric Parameters. Frontiers in Nutrition, 9, 910771. <a href="https://www.frontiersin.org/journals/nutrition/articles/10.3389/fnut.2022.910771/full" target="_blank" rel="noopener noreferrer">https://www.frontiersin.org/journals/nutrition/articles/10.3389/fnut.2022.910771/full</a></li>
                <li>UCLA Health. (2014). Older adults: Build muscle and you'll live longer. <a href="https://www.uclahealth.org/news/release/build-muscle-and-youll-live-longer" target="_blank" rel="noopener noreferrer">https://www.uclahealth.org/news/release/build-muscle-and-youll-live-longer</a></li>
                <li>CBS News. (2020). New insights from study of people age 90 and above. <a href="https://www.cbsnews.com/news/long-life-retirement-community-60-minutes-2020-11-22/" target="_blank" rel="noopener noreferrer">https://www.cbsnews.com/news/long-life-retirement-community-60-minutes-2020-11-22/</a></li>
              </ol>
            </section>
          )}
        </main>
      </div>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Age, Weight, and Longevity Report</p>
        <div className="download-section">
          <a href="/age_weight_longevity_report.md" download className="download-button">Download Report (Markdown)</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
