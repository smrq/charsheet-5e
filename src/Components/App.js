import React from 'react';
import Page from './Page';
import Box from './Box';
import ProficiencyList from './ProficiencyList';
import Skill from './Skill';
import Lines from './Lines';
import styles from './App.module.css';

function App() {
	return (
		<div className={styles.root}>
			<Page>
				<div style={{
					width: '100%',
					height: '100%',
					display: 'grid',
					gridTemplateColumns: 'auto auto 240px 240px',
					gridTemplateRows: '140px auto auto auto',
					gridTemplateAreas: `
						'header header header header'
						'ability skills numbers traits'
						'ability skills attacks features'
						'proficiencies proficiencies equip features'
					`
				}}>
					<Box type="header" style={{ gridArea: 'header' }} />
					<Box type="bg-stats" style={{ gridArea: 'ability' }} contentStyle={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
						<Box label="Strength" type="stat-str" />
						<Box label="Dexterity" type="stat-dex"/>
						<Box label="Constitution" type="stat-con"/>
						<Box label="Intelligence" type="stat-int"/>
						<Box label="Wisdom" type="stat-wis"/>
						<Box label="Charisma" type="stat-cha"/>
					</Box>
					<div style={{ gridArea: 'skills', display: 'flex', flexDirection: 'column'}}>
						<Box label="Inspiration" type="label-square" />
						<Box label="Proficiency Bonus" type="label-round" />
						<Box label="Saving Throws" type="skills" style={{ flex: 7 }}>
							<ProficiencyList>
								<span>Strength</span>
								<span>Dexterity</span>
								<span>Constitution</span>
								<span>Intelligence</span>
								<span>Wisdom</span>
								<span>Charisma</span>
							</ProficiencyList>
						</Box>
						<Box label="Skills" type="skills" style={{ flex: 19 }}>
							<ProficiencyList>
								<Skill name="Acrobatics" attribute="Dex" />
								<Skill name="Animal Handling" attribute="Wis" />
								<Skill name="Arcana" attribute="Int" />
								<Skill name="Athletics" attribute="Str" />
								<Skill name="Deception" attribute="Cha" />
								<Skill name="History" attribute="Int" />
								<Skill name="Insight" attribute="Wis" />
								<Skill name="Intimidation" attribute="Cha" />
								<Skill name="Investigation" attribute="Int" />
								<Skill name="Medicine" attribute="Wis" />
								<Skill name="Nature" attribute="Int" />
								<Skill name="Perception" attribute="Wis" />
								<Skill name="Performance" attribute="Cha" />
								<Skill name="Persuasion" attribute="Cha" />
								<Skill name="Religion" attribute="Int" />
								<Skill name="Sleight of Hand" attribute="Dex" />
								<Skill name="Stealth" attribute="Dex" />
								<Skill name="Survival" attribute="Wis" />
							</ProficiencyList>
						</Box>
					</div>
					<Box type="bg-main" style={{ gridArea: 'numbers' }} contentStyle={{ display: 'flex', flexDirection: 'column' }}>
						<div style={{ display: 'flex', flexDirection: 'row' }}>
							<Box label="Armor Class" type="ac" />
							<Box label="Initiative" type="std" style={{ flex: 1 }} />
							<Box label="Speed" type="std" style={{ flex: 1 }} />
						</div>
						<Box label="Current Hit Points" type="stacked1" style={{ flex: 1 }} />
						<Box label="Temporary Hit Points" type="stacked3" style={{ flex: 1 }} />
						<div style={{ flex: 1, display: 'flex', flexDirection: 'row' }}>
							<Box label="Hit Dice" type="std" style={{ flex: 1 }} />
							<Box label="Death Saves" type="std" style={{ flex: 1 }} />
						</div>
					</Box>
					<Box type="bg-main" style={{ gridArea: 'traits' }} contentStyle={{ display: 'flex', flexDirection: 'column' }}>
						<Box label="Personality Traits" type="stacked1" lined={true}>
							<Lines count={4} />
						</Box>
						<Box label="Ideals" type="stacked2" lined={true}>
							<Lines count={3} />
						</Box>
						<Box label="Bonds" type="stacked2" lined={true}>
							<Lines count={3} />
						</Box>
						<Box label="Flaws" type="stacked3" lined={true}>
							<Lines count={3} />
						</Box>
					</Box>
					<Box label="Attacks & Spellcasting" type="attacks" lined={true} style={{ gridArea: 'attacks' }}>
						<Lines count={17} />
					</Box>
					<Box label="Features & Traits" type="features" lined={true} style={{ gridArea: 'features' }} />
					<div style={{ gridArea: 'proficiencies', display: 'flex', flexDirection: 'column' }}>
						<Box label="Passive Wisdom (Perception)" type="label-flattened" />
						<Box label="Other Proficiencies & Languages" type="proficiencies" lined={true} style={{ flex: 1 }}>
							<Lines count={12} />
						</Box>
					</div>
					<Box label="Equipment" type="std" lined={true} style={{ gridArea: 'equip' }}>
						<Lines count={15} />
					</Box>
				</div>
			</Page>
		</div>
	);
}

export default App;
